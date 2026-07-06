from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import CompanyDocument
from .serializers import CompanyDocumentSerializer


class CompanyDocumentView(APIView):
    """
    Single, replaceable 'Company PDF' slot.

    GET    /api/documents/company-pdf/  — public. Returns the current document
                                           (file_url: null if none uploaded yet).
    PUT    /api/documents/company-pdf/  — admin only. multipart 'file' field.
                                           Replaces whatever was uploaded before,
                                           deleting the old file from disk.
    DELETE /api/documents/company-pdf/  — admin only. Removes the current PDF.
    """

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def _get_singleton(self):
        obj, _ = CompanyDocument.objects.get_or_create(pk=1)
        return obj

    def _require_admin(self, request):
        return request.user and request.user.is_authenticated and (
            request.user.is_staff or request.user.is_superuser
        )

    def get(self, request):
        obj = self._get_singleton()
        return Response(CompanyDocumentSerializer(obj, context={'request': request}).data)

    def put(self, request):
        if not self._require_admin(request):
            return Response({'detail': 'Admin only.'}, status=403)

        obj = self._get_singleton()
        new_file = request.FILES.get('file')
        if not new_file:
            return Response({'file': ['No file provided.']}, status=400)

        # Replace: delete the old file from disk before saving the new one.
        if obj.file and obj.file.name:
            obj.file.delete(save=False)

        obj.file = new_file
        obj.original_filename = new_file.name
        obj.save()
        return Response(CompanyDocumentSerializer(obj, context={'request': request}).data)

    def delete(self, request):
        if not self._require_admin(request):
            return Response({'detail': 'Admin only.'}, status=403)

        obj = self._get_singleton()
        if obj.file and obj.file.name:
            obj.file.delete(save=False)
        obj.original_filename = ''
        obj.save()
        return Response(CompanyDocumentSerializer(obj, context={'request': request}).data)
