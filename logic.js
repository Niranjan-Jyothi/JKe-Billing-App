const a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
const b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var dd = {
	content: [
		{
			text: 'Tax Invoice',
			style: 'header',
			alignment: 'center'
		},
		{
			image: 'data:image/png;base64,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',
			alignment: 'center',
		},
		{
			style: 'topAddress',
			text: ` KRWA 82 A PPN NAGAR, MAMANGALAM, Cochin-24, GSTIN: 32AINPP4465B1ZC`
		},
		{
			text: `Invoice No : ${$("#Tax_Invoice_details_No").val()},  Invoice date : ${$("#Tax_Invoice_details_date").val()}, Reverse Charge (Y/N) : ${$("#Tax_Invoice_details_Reverse").val()}, State: Kerala, Code : 32`,
			alignment: 'center'
			
		},
		{
			text: "_______________________________________________________________________________________________",
			alignment: 'center'
		},
		{
			text: 'Bill to Party',
			style: 'subheader'
		},
		{
			columns :[
				{	text: `Name: ${$("#BillToParty_Name").val()}
						Address : ${$("#BillToParty_Address").val()}
						GSTIN :  ${$("#BillToParty_GSTIN").val()}
						State : ${$("#BillToParty_State").val()}  Code : ${$("#BillToParty_Code").val()}`,
				
				},
				{
					text: 	`Transport Mode : ${$("#Transport_and_Supply_Mode").val()} 
							Vehicle number  : ${$("#Transport_and_Supply_number").val()}
							Date of Supply  : ${$("#Transport_and_Supply_Date").val()}
							Place of Supply : ${$("#Transport_and_Supply_Place").val()}`,
					margin:[50, 0, 0, 0]
				}
			],	
			//margin : [50,10]
			
				   
		},
		{
			style: 'myTable',
			table:{
				body:[
					//first row
					[
						{	
							rowSpan: 2,
							
							fillColor: '#cccccc',
							text : 'Sl No.'
						},
						{	
							rowSpan: 2,
							
							fillColor: '#cccccc',
							text : 'Product Description'
						},
						{	
							rowSpan: 2,
							
							fillColor: '#cccccc',
							text : 'Qty'
						},
						{	
							rowSpan: 2,
							
							fillColor: '#cccccc',
							text : 'Rate'
						},
						{	
							rowSpan: 2,
							
							fillColor: '#cccccc',
							text : 'Amount'
						},
						{	
							rowSpan: 2,
							
							fillColor: '#cccccc',
							text : 'Discount'
						},
						{	
							rowSpan: 2,
							
							fillColor: '#cccccc',
							text : 'Taxable Value'
						},
						{	
							rowSpan:1,
							colSpan : 2,
							alignment: 'center',
							
							fillColor: '#cccccc',
							text : 'CGST'
						},
						{}, //giving an empty for prev filled extra colspan
						{	
							rowSpan: 1,
							colSpan : 2,
							
							fillColor: '#cccccc',
							alignment: 'center',
							text : 'SGST'
						},
						{},//giving an empty for prev filled extra colspan
						{	
							rowSpan: 2,
							
							fillColor: '#cccccc',
							text : 'Total'
						}
					],
					[ //second row
						{},{},{},{},{},{},{},
						{
							text : 'Rate',
							
							fillColor: '#cccccc',
						},
						{
							text : 'Amount',
							
							fillColor: '#cccccc',
						},
						{
							text : 'Rate',
							
							fillColor: '#cccccc',
						},
						{
							text : 'Amount',
							
							fillColor: '#cccccc',
						},						
						{} //final empty row cell for total
					]
					
				]
			}
		}		   
	],
	styles: {
		header: {
			fontSize: 20,
			bold: true,
			alignment: 'justify',
			margin:[0,3,0,2],
		},
		subheader: {
			fontSize: 14,
			bold: true,
			alignment: 'center',
			margin : [0,5,0,2]
		},
		topAddress:{
			fontSize: 10,
			bold: false,
			alignment: 'center',
			margin : [0, 2, 0, 7]
		},
		myTable: {
			margin: [0, 5, 0, 15],
			border : [true, true, true, true]
		}
	}
	
}
// pdfMake.vfs = pdfFonts.pdfMake.vfs;



$('#genReport').click( (event) => {
        
	console.log("FInal Table Data -> ", tableData);
	
	console.log("totalQty -> ", totalQty)
	console.log( "totalProducts -> ", totalProducts)
	console.log( "totalAmount -> ", totalAmount);
	console.log( "totalTaxAmt -> ", totalTaxAmt);
	console.log( "totalCGSTAmt -> ", totalCGSTAmt);
	console.log( "totalSGSTAmt -> ", totalSGSTAmt);

	//console.log(dd.content[7].table.body);  //this is the table tip where we need to appende table data
	
	tableData.forEach(product => {
		dd.content[7].table.body.push(
			
			[
				{	
					fontSize: 8,
					text : product.No
				},
				{	
					fontSize: 8,
					
					text : product.Desc
				},
				{	
					fontSize: 8,
					
					text : product.Qty
				},
				{	
					fontSize: 8,
					
					text : product.Rate
				},
				{	
					fontSize: 8,
					
					text : product.Amount
				},
				{	
					fontSize: 8,
					
					text : product.Discount
				},
				{	
					fontSize: 8,
					
					text : parseInt(product.TaxAmount)
				},
				{	
					fontSize: 8,
					
					text : parseInt(product.CGSTRate)
				},
				{	
					fontSize: 8,
					
					text : parseInt(product.CGSTAmt)
				},
				{	
					fontSize: 8,
					
					text : parseInt(product.SGSTRate)
				},
				{	
					fontSize: 8,
					
					text : parseInt(product.SGSTAmt)
				},
				{	
					fontSize: 8,
					
					text : parseInt( product.Total)
				},
			]
		)
	});

	dd.content[7].table.body.push(
		[
			{	
				alignment: 'center',
				colSpan : 2,
				bold : true,
				fontSize: 20,
				
				fillColor : "#cccccc",
				text : "Total"
			},
			{},
			{	
				colSpan : 1,
				bold : false,
				fontSize: 9,
				
				text : totalQty
			},
			{},
			{	
				colSpan : 1,
				bold : false,
				fontSize: 9,
				
				text : totalAmount
			},
			{},
			{	
				colSpan : 1,
				bold : true,
				fontSize: 9,
				
				text : totalTaxAmt
			},
			{},
			{	
				colSpan : 1,
				bold : true,
				fontSize: 9,
				
				text : totalCGSTAmt
			},
			{},
			{	
				colSpan : 1,
				bold : true,
				fontSize: 9,
				
				text : totalSGSTAmt
			},
			
			{
				colSpan : 1,
				bold : true,
				fontSize: 9,
				text : parseInt(totalSGSTAmt + totalCGSTAmt + totalTaxAmt)
			}


		],
		[
			{	
				alignment: 'center',
				colSpan : 7,
				bold : true,
				fontSize: 9,
				
				//fillColor : "#cccccc",
				text : "Total Invoice amount in words"
			},
			{},{},{},{},{},{},
			{
				colSpan : 4,
				text : "Total Amount Before Tax :",
			},
			{},{},{},
			{
				colSpan: 1,
				text : totalTaxAmt
			}
		],
		[
			{
				colSpan : 7,
				rowSpan : 4,
				alignment : "center",
				text : inWords(parseInt(totalTaxAmt + totalCGSTAmt + totalSGSTAmt))
			},
			{},{},{},{},{},{},
			{
				colSpan : 4,
				text : "Add: CGST"
			},
			{},{},{},
			{
				colSpan: 1,
				
				text : totalCGSTAmt
			}
		],
		[
			{},
			{},{},{},{},{},{},
			{
				colSpan : 4,
				text : "Add: SGST"
			},
			{},{},{},
			{
				colSpan: 1,
				
				text : totalSGSTAmt
			}
		],
		[
			{},
			{},{},{},{},{},{},
			{
				colSpan : 4,
				text : "Total Tax Amount :"
			},
			{},{},{},
			{
				colSpan: 1,
				
				text : parseInt(totalCGSTAmt + totalSGSTAmt)
			}
		],
		[
			{},
			{},{},{},{},{},{},
			{
				colSpan : 4,
				text : "Total Amount Including Tax:",
				fillColor : "#cccccc"
			},
			{},{},{},
			{
				colSpan: 1,
				
				text : parseInt(totalTaxAmt + totalCGSTAmt + totalSGSTAmt)
			}
		],
		[
			{	
				alignment: 'center',
				colSpan : 5,
				bold : true,
				fontSize: 9,
				
				////fillColor : "#cccccc",
				text : "Bank Details"
			},{},{},{},{},
			{
				colSpan : 2,
				rowSpan : 9,
				text : ""
			},{},
			{
				alignment: 'center',
				colSpan : 4,
				bold : true,
				fontSize: 9,
				text : "GST on Reverse Charge"
			},{},{},{},
			{
				text : 0
			}
		],
		[
			{
				colSpan : 5,
				bold : true,
				fontSize: 9,
				text : "Bank A/C: 10040200041915"
			},{},{},{},{},
			{},{},
			{
				colSpan : 5,
				fontSize : 8,
				text : "Ceritified that the particulars given above are true and correct"
			},{},{},{},{}
		],
		[
			{
				colSpan : 5,
				bold : true,
				fontSize: 9,
				text : "Bank IFSC: FDRL0001004"

			},{},{},{},{},{},{},
			{
				colSpan : 5,
				alignment: 'center',
				bold : true,
				fontSize: 9,
				text : "For JKe Company"
			},{},{},{},{}
		],
		[
			{
				alignment: 'center',
				colSpan : 5,
				rowSpan : 7,
				bold : true,
				fontSize: 9,
				text : "Terms & conditions"

			},{},{},{},{},
			{},{},
			{
				colSpan : 5,
				rowSpan : 6,
				text : ''
			},{},{},{},{}
		],
		[
			{},{},{},{},{},{},{},{},{},{},{},{}
		],
		[
			{},{},{},{},{},{},{},{},{},{},{},{}
		],
		[
			{},{},{},{},{},{},{},{},{},{},{},{}
		],
		[
			{},{},{},{},{},{},{},{},{},{},{},{}
		],
		[
			{},{},{},{},{},{},{},{},{},{},{},{}
		],
		[
			{},{},{},{},{},
			{
				colSpan : 2,
				bold : true,
				fontSize  :8,
				text : "Company Seal",
				alignment: 'center',
			},{},
			{
				colSpan : 5,
				bold : true,
				fontSize  :8,
				text : "Authorised signatory",
				alignment: 'center',
			},{},{},{},{}
		]
	)

	
    pdfMake.createPdf(dd).print();
	pdfMake.createPdf(dd).download("BillSample");
    console.log("Done");


	
});


$('#submit').click( (event) => {
    console.log("hello");
    pdfMake.createPdf(dd).print();
	
	//pdfMake.createPdf(dd).download("BillSample");
    console.log("Done");
});

