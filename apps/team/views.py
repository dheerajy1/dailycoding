from rest_framework import generics
from rest_framework.exceptions import NotFound

from apps.accounts.permissions import IsAdminOrReadOnly
from .models import TeamMember
from .serializers import TeamMemberSerializer


class TeamMemberListCreateView(generics.ListCreateAPIView):
    queryset           = TeamMember.objects.all().order_by('order', 'id')
    serializer_class   = TeamMemberSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx['request'] = self.request
        return ctx


class TeamMemberDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset           = TeamMember.objects.all()
    serializer_class   = TeamMemberSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx['request'] = self.request
        return ctx


class MentorView(generics.RetrieveAPIView):
    serializer_class   = TeamMemberSerializer
    permission_classes = []  # fully public

    def get_object(self):
        try:
            return TeamMember.objects.get(is_mentor=True)
        except TeamMember.DoesNotExist:
            raise NotFound('No mentor profile configured.')

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx['request'] = self.request
        return ctx
