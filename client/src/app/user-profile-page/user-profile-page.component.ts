import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ProductsService} from '../__services/products.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [NavBarComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css'
})
export class UserProfilePageComponent {
  productForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    brand: ['', Validators.required],
    price: ['', Validators.required],
    image_url: [''], // Add validators if needed
    gender: ['', Validators.required],
    category: ['', Validators.required],
    sizes: [[]] // Assuming sizes is an array
  });;
  genders: any[] = [{id:0,name:"None"},{id:1,name:"Male"},{id:2,name:"Female"}];
  categories: any[] = []; 
  availableSizes: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient,private ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.getCategories().subscribe(data=>{
      this.categories = this.categories.concat(data);
      console.log(data);
    });
    this.ProductsService.getSizes().subscribe(data=>{
      this.availableSizes = this.availableSizes.concat(data);
      console.log(data);
    });
  }

  onSubmitTop() {
    console.log(this.productForm)
      this.ProductsService.onCreateNewProductSubmitTop(this.productForm).subscribe(
        response => {
          console.log('Product created successfully:', response);
          // Optionally reset the form after successful submission
          // this.productForm.reset();
        },
        error => {
          console.error('Error creating product:', error);
        }
      );
    }
  onSubmitShoes() {
    console.log(this.productForm)
      this.ProductsService.onCreateNewProductSubmitShoes(this.productForm).subscribe(
        response => {
          console.log('Product created successfully:', response);
          // Optionally reset the form after successful submission
          // this.productForm.reset();
        },
        error => {
          console.error('Error creating product:', error);
        }
      );
    }
  onSubmitHats() {
    console.log(this.productForm)
      this.ProductsService.onCreateNewProductSubmitHats(this.productForm).subscribe(
        response => {
          console.log('Product created successfully:', response);
          // Optionally reset the form after successful submission
          // this.productForm.reset();
        },
        error => {
          console.error('Error creating product:', error);
        }
      );
    }
  onSubmitPants() {
    console.log(this.productForm)
      this.ProductsService.onCreateNewProductSubmitPants(this.productForm).subscribe(
        response => {
          console.log('Product created successfully:', response);
          // Optionally reset the form after successful submission
          // this.productForm.reset();
        },
        error => {
          console.error('Error creating product:', error);
        }
      );
    }

  
  
}