let customers=[
    {
        id:"C001",
        name:"nimal",
        address:"panadura",
        age:12
    }
];
let items=[
    {
        itemCode:"I001",
        description:"bla bla",
        stock:20
    }
];
let orders=[
    {
        customerId:"C001",
        cutomerName:"saman",
        items:[
            {
                itemCode:"I001",
                qty:2,
                total:2500.00
            }
        ]
    }
];

console.log(customers)

function addCustomer(){

    let customers=[
        {
            id:document.getElementById("txtId").value,
            name:document.getElementById("txtName").value,
            address:document.getElementById("txtAddress").value,
            age: Number(document.getElementById("txtAge").value)
        }
    ];

 console.log([customers]);


 alert('Added successfully!');


}

function addItem(){

    let items=[
        {
            itemCode:document.getElementById("txtItemCode").value,
            description:document.getElementById("txtDescription").value,
            stock:Number(document.getElementById("txtStock").value)
        }
    ];
    console.log([items]);
   
   
    alert('Added successfully!');
   
   
   }


   function addOrder(){

    let orders=[
        {
            customerId:document.getElementById("txtCustId").value,
            cutomerName:document.getElementById("txtCustName").value,
            items:[
                {
                    itemCode:document.getElementById("txtOredrId").value,
                    qty:Number(document.getElementById("txtQty").value),
                    total:document.getElementById("txtTotal").value
                }
            ]
        }
    ];

   
    console.log([orders]);
   
 
    alert('Added successfully!');
   }