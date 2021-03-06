import { ProductService } from './../../../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/oshop/shared/models/product';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

declare var $: any;
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  products: Product[];
  date: number;
  totalPrice = 0;
  tax = 6.4;

  constructor(private productService: ProductService) {
    document.getElementById('productsTab').style.display = 'none';
    document.getElementById('shippingTab').style.display = 'none';
    document.getElementById('billingTab').style.display = 'none';
    document.getElementById('resultTab').style.display = 'block';

    this.products = this.productService.getLocalCartProducts();

    this.products.forEach((product) => {
      this.totalPrice += +product.productPrice;
    });

    this.date = Date.now();
  }

  ngOnInit(): void {
  }

  downloadReceipt() {
    const data = document.getElementById('receipt');
    console.log(data);

    // html2canvas(data).then((canvas) => {
    //   const imgWidth = 208;
    //   const pageHeight = 295;
    //   const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //   const heightLeft = imgHeight;

    //   const contentDataURL = canvas.toDataURL('image/png');
    //   const pdf = new jsPDF('p', 'mm', 'a4');
    //   const position = 0;
    //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    //   pdf.save('farmerbuddy.pdf');

    // });
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(document.getElementById('receipt'), {
      callback: (pdf) => {
        pdf.save('farmerbuddy.pdf');
      },
    })
  }

}
