import { Component, OnInit } from '@angular/core';
import { JdmServiceService } from '../../services/jdm-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  carsCount: number = 0;
  brandsCount: number = 0;
  averageSpeed: number = 0;

  constructor(private apiService: JdmServiceService) { }

  ngOnInit(): void {
    this.loadCarData();
  }

  loadCarData() {
    this.apiService.getCarData().subscribe(response => {
      this.carsCount = response.data.totalCars;
      this.brandsCount = response.data.totalBrands;
      this.averageSpeed = response.data.avgMaxSpeed;
    }, error => {
      console.error("Error:", error);
    });
  }
}
