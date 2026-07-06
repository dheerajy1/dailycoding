from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdminOrReadOnly(BasePermission):
    """
    GET / HEAD / OPTIONS → anyone (public)
    POST / PUT / PATCH / DELETE → is_staff or is_superuser only
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return (
            request.user
            and request.user.is_authenticated
            and (request.user.is_staff or request.user.is_superuser)
        )
