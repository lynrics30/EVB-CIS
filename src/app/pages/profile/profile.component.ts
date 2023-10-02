import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  upload() {
    async function upload(): Promise<void> {
      const { value: file } = (await Swal.fire({
        titleText: 'Upload your photo',
        input: 'file',
        showCancelButton: true,
        confirmButtonText: 'Upload',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        inputAttributes: {
          accept: 'image/*',
          'aria-label': 'Upload your profile picture',
        },
      })) as { value: File | undefined };

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          Swal.fire({
            titleText: 'Profile Picture Updated!',
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
            imageUrl: e.target?.result as string,
            imageAlt: 'The uploaded picture',
            imageWidth: '90%',
            imageHeight: '400',
          });
        };
        reader.readAsDataURL(file);
      }
    }
    upload()
      .then(() => {
        console.log('Image uploaded successfully.');
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  }
}
