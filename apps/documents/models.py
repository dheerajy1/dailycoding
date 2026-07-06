from django.db import models


class CompanyDocument(models.Model):
    """
    A single, replaceable 'Company PDF' slot (e.g. company profile / brochure)
    that the public site can offer as a download. Uploading a new file
    replaces whatever was there before — this is intentionally NOT a
    multi-document library.
    """
    file              = models.FileField(upload_to='documents/', blank=True, null=True)
    original_filename = models.CharField(max_length=255, blank=True)
    uploaded_at       = models.DateTimeField(auto_now_add=True)
    updated_at        = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'documents_companydocument'

    def __str__(self):
        return self.original_filename or 'Company PDF'
