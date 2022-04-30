import React,{ useEffect,useState} from 'react';
import Data from '../../data'

function DataContainer() {
    
   const [product, setProduct] = useState('');
   const [customer, setCustomer] = useState('');
   const [q1, setQ1] = useState(false);
   const [q2, setQ2] = useState(false);
   const [q3, setQ3] = useState(false);
   const [q4, setQ4] = useState(false);
    const [myData, setMyData] =useState(Data);

   useEffect(() => {
       
    const filterProduct = Data.filter((item) =>  product.length>0 ? item.Product.includes(product) : true )
    const filterCustomer = filterProduct.filter(item => customer.length>0 ? item.Customer.includes(customer) : true )
    const filterQ1 =filterCustomer.filter(item => q1 ? item['Qtr 1']!=null:item);
    const filterQ2 =filterQ1.filter(item => q2 ? item['Qtr 2']!=null:item);
    const filterQ3 =filterQ2.filter(item => q3 ? item['Qtr 3']!=null:item);
    const filterQ4 =filterQ3.filter(item => q4 ? item['Qtr 4']!=null:item);

    setMyData(filterQ4);
   },[product,customer,q1,q2,q3,q4])

    return (
        <>
            <center><h1>Amplify data</h1></center>
            <div className="container d-flex justify-content-center">
            <table className="text-center table-success">
                <thead>
            <tr>
                <th><input type='text' value={product} onChange={(e) => setProduct(e.target.value)} /></th>
                <th><input type='text' value={customer} onChange={(e) => setCustomer(e.target.value)} /></th>
                <th><input type='checkbox' value={q1} name="q1" onChange={e=>setQ1(!q1)}/></th>
                <th><input type='checkbox' value={q2} name="q2" onChange={e=>setQ2(!q2)}/></th>
                <th><input type='checkbox' value={q3} name="q3" onChange={e=>setQ3(!q3)}/></th>
                <th><input type='checkbox' value={q4} name="q4" onChange={e=>setQ4(!q4)}/></th>
            </tr>
            <tr className="table-success">
                <th>Product</th>
                <th>Customer</th>
                <th>Q1 Earnings</th>
                <th>Q2 Earnings</th>
                <th>Q3 Earnings</th>
                <th>Q4 Earnings</th>                
            </tr>
            </thead>
            <tbody>
            {myData.map ((item,index) =>{
                return(
                    <tr key={index}>
                    <td>{item.Product}</td>
                    <td>{item.Customer}</td>
                    <td>{item['Qtr 1'] !=null  ? item['Qtr 1'] : null}</td>
                    <td>{item['Qtr 2'] !=null  ? item['Qtr 2'] : null}</td>
                    <td>{item['Qtr 3'] !=null  ? item['Qtr 3'] : null}</td>
                    <td>{item['Qtr 4'] !=null  ? item['Qtr 4'] : null}</td>
                    </tr>
                );
            })}
            </tbody>
            </table> 
            </div>
        </>
    );
}
 

export default DataContainer;