let totalQty = 0;
let totalProducts = '1';
let totalAmount = 0;
let totalTaxAmt = 0;
let totalCGSTAmt = 0;
let totalSGSTAmt = 0;
let total = 0;

let productNumber = 1;

let tableData = [];

$( document ).ready(function() {
    console.log( "ready!" );

    // by default we keep the add next button in view and hide the finish button until all the product data has been fetched
    $('#save_and_flush_product_form').show();
    $('#genReport').hide();

    $('#totalProductsSubmit').click( (event) => {
        
        totalProducts = parseInt($('#totalProductsNJ').val());
        console.log( $('#totalProductsNJ').val());
        //console.log("jhjd")
    });

    // any form ele change
    $('#productForm').change ( (e) => {
        // 1. Prod Amoint
        document.getElementById("prodAmount").value = parseInt($('#prodQty').val()) * parseInt($('#prodRate').val()) 
        // 2. Prody amt after dis
        $('#prodTaxValue').val(  $('#prodAmount').val() -  $('#prodDis').val())
        //3. CGST Amount
        $('#prodTaxCGSTAmt').val(  $('#prodTaxCGSTRate').val() * $('#prodTaxValue').val() / 100)
        //3. CGST Amount
        $('#prodTaxSGSTAmt').val(  $('#prodTaxSGSTRate').val() * $('#prodTaxValue').val() / 100)
        
        $('#prodTot').val(  parseInt($('#prodTaxValue').val()) + parseInt($('#prodTaxCGSTAmt').val()) +  parseInt($('#prodTaxSGSTAmt').val()));
        
    
    })
    
    
    $('#saveProd').click( (event) => {
        
        
        var data = $('#productForm').serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});

        //console.log("Form Data -> ", data);

        totalQty += parseInt(data.prodQty);
        totalAmount += parseInt(document.getElementById("prodAmount").value);
        totalTaxAmt += parseInt($('#prodTaxValue').val());
        totalCGSTAmt += parseInt($('#prodTaxCGSTAmt').val());
        totalSGSTAmt += parseInt($('#prodTaxSGSTAmt').val());
        total += parseInt($('#prodTot').val());

        tableData.push({
            "No" : productNumber,
            "Desc" : data.prodDesc,
            "Qty" : data.prodQty,
            "Rate" : data.prodRate,
            "Amount" : document.getElementById("prodAmount").value,
            "Discount" : data.prodDis,
            "TaxAmount" : $('#prodTaxValue').val(),
            "CGSTRate" : data.prodTaxCGSTRate,
            "CGSTAmt" :  $('#prodTaxCGSTAmt').val(),
            "SGSTRate" : data.prodTaxSGSTRate,
            "SGSTAmt" : $('#prodTaxSGSTAmt').val(),
            "Total" : $('#prodTot').val()

        })

        productNumber +=1;

        if(tableData.length == totalProducts)
            {
                $('#save_and_flush_product_form').hide();
                $('#genReport').show();
            }
        else{
            $('#save_and_flush_product_form').show();
            $('#genReport').hide();
        }
    });

   

    $('#modifyAddedProductBtn').click( (event) => {
       tableData.pop();
       console.log("Last entry deleted, current table data -> ", tableData)
       
       productNumber -= 1;
       
       totalQty -= parseInt($('#prodQty').val());
       totalAmount -= parseInt(document.getElementById("prodAmount").value);
       totalTaxAmt -= parseInt($('#prodTaxValue').val());
       totalCGSTAmt -= parseInt($('#prodTaxCGSTAmt').val());
       totalSGSTAmt -= parseInt($('#prodTaxSGSTAmt').val());
       total -= parseInt($('#prodTot').val());

       if(tableData.length == totalProducts)
            {
                $('#save_and_flush_product_form').hide();
                $('#genReport').show();
            }
        else{
            $('#save_and_flush_product_form').show();
            $('#genReport').hide();
        }
    });

    $('#save_and_flush_product_form').click( (event) => {
        console.log("Form Resetted!");
        
        $('#productForm')[0].reset();
    });

   

    $('#dom').click( (event) => {
        
        
        $('#domesticCondition').hide();
        $('#productForm')[0].reset();
        totalQty = 0;
        totalProducts = '1';
        totalAmount = 0;
        totalTaxAmt = 0;
        totalCGSTAmt = 0;
        totalSGSTAmt = 0;
        total = 0;

        productNumber = 1;

        tableData = [];

        if(dd){
            dd.content[5].table.body = dd.content[5].table.body.slice(0,2)
        }
    });
    $('#nonDom').click( (event) => {
        
        $('#domesticCondition').show();
        $('#productForm')[0].reset();
        totalQty = 0;
        totalProducts = '1';
        totalAmount = 0;
        totalTaxAmt = 0;
        totalCGSTAmt = 0;
        totalSGSTAmt = 0;
        total = 0;

        productNumber = 1;

        tableData = [];
        if(dd){
            dd.content[5].table.body = dd.content[5].table.body.slice(0,2)
        }
    });


});




