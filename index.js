const details =[
    {
        name:"RECTANGULAR ACRYLIC",
        src:"https://flowers.thewhitebtq.com/wp-content/uploads/2023/02/1-5.jpg",
        Dimension: "Length: 48cm Width: 16cm Height: 22cm",
        CakeFlavor:"Coconut Cold Cheesecake",
        TruffleFlavor: "Oreo, Popping Caramel, Biscuits, Red Velvet, Raspberry Cheesecake",
        Price:498.00
    },
   {
        name:'MEGA BOUQUETS',
        src:'https://flowers.thewhitebtq.com/wp-content/uploads/2023/02/1-4.jpg',
        Dimension: "Length: 48cm Width: 16cm Height: 22cm",
        CakeFlavor:"Coconut Cold Cheesecake",
        TruffleFlavor: "Oreo, Popping Caramel, Biscuits, Red Velvet, Raspberry Cheesecake",
        Price:3000.00,
    },
  {
        name:'HANDTIED BOUQUETS',
        src:'https://flowers.thewhitebtq.com/wp-content/uploads/2023/01/21-1-1.jpg',
        Dimension: "Length: 48cm Width: 16cm Height: 22cm",
        CakeFlavor:"Coconut Cold Cheesecake",
        TruffleFlavor: "Oreo, Popping Caramel, Biscuits, Red Velvet, Raspberry Cheesecake",
        Price:504.00
    },
  
    {
        name:'ACRYLIC TRAY 005',
        src:'https://flowers.thewhitebtq.com/wp-content/uploads/2023/01/12-new.jpg',
        CakeFlavor:"Coconut Cold Cheesecake",
        Dimension: "Length: 48cm Width: 16cm Height: 22cm",
        TruffleFlavor: "Oreo, Popping Caramel, Biscuits, Red Velvet, Raspberry Cheesecake",
        Price:429.00
    },
    {
        name:'TUBE ACRYLIC 011',
        src:'https://flowers.thewhitebtq.com/wp-content/uploads/2023/01/Tube-Acrylic-011-2.jpg',
        Dimension: "Length: 48cm Width: 16cm Height: 22cm",
        CakeFlavor:"Coconut Cold Cheesecake",
        TruffleFlavor: "Oreo, Popping Caramel, Biscuits, Red Velvet, Raspberry Cheesecake",
        Price:460.00
    },
    {
        name:'SINGLE ACRYLIC',
        src:'https://flowers.thewhitebtq.com/wp-content/uploads/2022/10/Single-Acrylic-002-1.jpeg',
        CakeFlavor:"Coconut Cold Cheesecake",
        Dimension: "Length: 48cm Width: 16cm Height: 22cm",
        TruffleFlavor: "Oreo, Popping Caramel, Biscuits, Red Velvet, Raspberry Cheesecake",
        Price:212.00
    }

]




// document.getElementsByClassName("box").addEventListener("click", function() {
//     alert("Hello World!");
//   });


var detail= document.getElementById('detail')

function myFunction(value) {
  
       
details.map((data,key)=>{
    if(data.name===value){
        const stringify = JSON.stringify(data)
        
   localStorage.setItem('data',stringify)
    window.location="./detail.html", true; 
}

})
  }

 

  function LoadData(){
    const data=  localStorage.getItem('data')
    var parseData = JSON.parse(data)
    var image = document.getElementById('img')
    let name = document.getElementById('name')
    let dimension = document.getElementById('dimension')
    let cakeflavor = document.getElementById('Cakeflavor')
    let flavor = document.getElementById('flavors')
     let price = document.getElementById('price')
    image.src = parseData.src
    console.log(image)
      name.innerHTML = parseData.name
      dimension.innerHTML = parseData.Dimension
      cakeflavor.innerHTML = parseData.CakeFlavor
      flavor.innerHTML = parseData.TruffleFlavor
      price.innerHTML = parseData.Price
 
     }