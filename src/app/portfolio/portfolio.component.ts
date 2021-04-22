import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @Input() data: string;

  Banner: Array<PortfolioModel> = [
    {

    ID: 'CP',
    Href: '#CP',
    Title: 'โรงแรมฟอร์จูน ริเวอร์วิว เชียงของ',
    Owner: 'บริษัท ซี.พี. แลนด์ จำกัด (มหาชน)',
    Start: 'สิงหาคม พ.ศ.2558 (08/2558)',
    End: 'มิถุนายน พ.ศ.2559 (06/2559)',
    Image:
    [
      {Class: 'carousel-item active', image: './assets/image/Portfolios/CPland/1.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/CPland/2.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/CPland/3.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/CPland/4.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/CPland/5.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/CPland/6.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/CPland/7.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/CPland/8.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/CPland/9.jpg'}
    ],
    Place: 'อ.เชียงของ จ.เชียงราย'},

    {
    ID: 'Eagle',
    Href: '#Eagle',
    Title: 'ออฟฟิศสำนักงานบริษัท EKK Eagle Thailand',
    Owner: 'บริษัท อีเคเค อีเกิล (ไทยแลนด์) จำกัด',
    Start: 'ตุลาคม พ.ศ.2561',
    End: 'พฤษภาคม พ.ศ.2562',
    Image:
    [
      {Class: 'carousel-item active', image: './assets/image/Portfolios/EKKEagleThailand/1.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/EKKEagleThailand/2.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/EKKEagleThailand/3.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/EKKEagleThailand/4.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/EKKEagleThailand/5.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/EKKEagleThailand/6.jpg'}
    ],
    Place: 'นิคมอุตสาหกรรมอมตะนคร จ.ชลบุรี'},
    {
    ID: 'Isetan',
    Href: '#Isetan',
    Title: 'ห้างสรรพสินค้า Isetan (Central World)',
    Owner: 'บริษัท อิเซตัน (ประเทศไทย) จำกัด',
    Start: 'กันยายน พ.ศ.2558',
    End: 'มกราคม พ.ศ.2559',
    Image:
    [
      {Class: 'carousel-item active', image: './assets/image/Portfolios/Isetan/1.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/Isetan/2.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/Isetan/3.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/Isetan/4.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/Isetan/5.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/Isetan/6.jpg'},
      {Class: 'carousel-item', image: './assets/image/Portfolios/Isetan/7.jpg'}
    ],
    Place: 'ศูนย์การค้าเซ็นทรัลเวิลด์ เขตปทุมวัน กรุงเทพฯ'},
    {
      ID: 'MUIC',
      Href: '#MUIC',
      Title: 'วิทยาลัยนานาชาติ มหาวิทยาลัยมหิดล',
      Owner: 'มหาวิทยาลัยมหิดล',
      Start: 'กันยายน พ.ศ.2560',
      End: 'มิถุนายน พ.ศ.2561',
      Image:
      [
        {Class: 'carousel-item active', image: './assets/image/Portfolios/MUIC/1.jpg'},
        {Class: 'carousel-item', image: './assets/image/Portfolios/MUIC/2.jpg'},
        {Class: 'carousel-item', image: './assets/image/Portfolios/MUIC/3.jpg'},
        {Class: 'carousel-item', image: './assets/image/Portfolios/MUIC/4.jpg'},
        {Class: 'carousel-item', image: './assets/image/Portfolios/MUIC/5.jpg'},
        {Class: 'carousel-item', image: './assets/image/Portfolios/MUIC/6.jpg'},
        {Class: 'carousel-item', image: './assets/image/Portfolios/MUIC/7.jpg'}
      ],
      Place: 'ต.ศาลายา อ.พุทธมณฑล จ.นครปฐม'},
      {
        ID: 'ST',
        Href: '#ST',
        Title: 'ห้องประวัติโรงเรียนสตรีวิทยา',
        Owner: 'สมาคมผู้ปกครองและครูโรงเรียนสตรีวิทยา',
        Start: 'มีนาคม พ.ศ.2562',
        End: 'กันยายน พ.ศ.2562',
        Image:
        [
          {Class: 'carousel-item active', image: './assets/image/Portfolios/สตรีวิทยา/1.JPG'},
          {Class: 'carousel-item', image: './assets/image/Portfolios/สตรีวิทยา/2.JPG'},
          {Class: 'carousel-item', image: './assets/image/Portfolios/สตรีวิทยา/3.JPG'},
          {Class: 'carousel-item', image: './assets/image/Portfolios/สตรีวิทยา/4.JPG'},
          {Class: 'carousel-item', image: './assets/image/Portfolios/สตรีวิทยา/5.JPG'},
          {Class: 'carousel-item', image: './assets/image/Portfolios/สตรีวิทยา/6.JPG'},
          {Class: 'carousel-item', image: './assets/image/Portfolios/สตรีวิทยา/7.JPG'}
        ],
        Place: 'ถ.ดินสอ เขตพระนคร กรุงเทพฯ'},
        {
          ID: 'ThaiRoyal',
          Href: '#ThaiRoyal',
          Title: ' โรยัลไทย เฮิร์บ',
          Owner: 'บริษัท รอยัลไทย เฮิร์บ จำกัด',
          Start: 'กันยายน พ.ศ.2557',
          End: 'พฤษภาคม พ.ศ.2558',
          Image:
          [
            {Class: 'carousel-item active', image: './assets/image/Portfolios/ThaiRoyalhurbs/1.jpg'},
            {Class: 'carousel-item', image: './assets/image/Portfolios/ThaiRoyalhurbs/2.jpg'},
            {Class: 'carousel-item', image: './assets/image/Portfolios/ThaiRoyalhurbs/3.jpg'},
            {Class: 'carousel-item', image: './assets/image/Portfolios/ThaiRoyalhurbs/4.jpg'},
            {Class: 'carousel-item', image: './assets/image/Portfolios/ThaiRoyalhurbs/5.jpg'},
            {Class: 'carousel-item', image: './assets/image/Portfolios/ThaiRoyalhurbs/6.jpg'},
            {Class: 'carousel-item', image: './assets/image/Portfolios/ThaiRoyalhurbs/7.jpg'},
            {Class: 'carousel-item', image: './assets/image/Portfolios/ThaiRoyalhurbs/8.jpg'}
          ],
          Place: 'เขตลาดกระบัง กรุงเทพฯ'}
  ];

  // Banner =
  // ['./assets/image/slide/1.jpg',
  // './assets/image/slide/2.jpg',
  // './assets/image/slide/3.jpg',
  // './assets/image/slide/4.jpg',
  // './assets/image/slide/5.jpg',
  // './assets/image/slide/6.png',
  // './assets/image/slide/7.png',
  // './assets/image/slide/8.jpg',
  // './assets/image/slide/9.jpg',
  // './assets/image/slide/10.jpg'];
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
class PortfolioModel
{
  ID: string;
  Title: string;
  Href: string;
  Owner: string;
  Start: string;
  End: string;
  Place: string;
  Image: Array<ImgPortfolio>;
}
class ImgPortfolio{
  Class: string;
  image: string;
}
