# models.py
from django.db import models

class Candidate_details(models.Model):
    # Define your model fields here
    candidate_ID = models.CharField(max_length=10, primary_key=True)
    candidate_name = models.CharField(max_length=50)
    University_name = models.CharField(max_length=100)
    degree = models.CharField(max_length=50)
    YOP = models.DateField()
    status = models.CharField(max_length=10)
    # ... add more fields as needed

    class Meta:
        db_table = 'candidate_data'

    def __str__(self):
        return (
            f"Candidate ID: {self.candidate_ID}, "
            f"Name: {self.candidate_name}, "
            f"University: {self.University_name}, "
            f"Degree: {self.degree}, "
            f"Year of Passing: {self.YOP}, "
            f"Status: {self.status}"
        )
    