import { useState } from 'react';
import Layout from '../layout/Layout';
import './dashboard.scss'

function Dashboard() {
    const [dropdown, setDropdown] = useState(false);

    const tabs = document.querySelectorAll('.tabs li');
    const tabContent = document.querySelectorAll('.tab-item');
    tabs.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            tabs.forEach(rm => {rm.classList.remove('active')})
            item.classList.add('active');
            tabContent.forEach(hide => hide.classList.remove('show'))
            tabContent[i].classList.add('show');
            console.log('object')
        })
    })

    return (
        <Layout>
            <div className="dashboard-view">
                <h1 className='table-title'>Recent Request</h1>
                <p className='sub-pare'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div className="search-filter">
                    <div className="search-box">
                        <input type="text" placeholder='Search.' id='search' />
                        <label htmlFor="search"><i className="ri-search-line"></i></label>
                    </div>
                    <div className={`filters dropdown ${dropdown.toString()}`}>
                        <button className='dropdown-toggle' onClick={()=> setDropdown(!dropdown)}><i className="ri-filter-2-line"></i> Filter</button>
                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <div className="checkbox_wrap">
                                        <label className="checkbox"> 
                                            <input type="checkbox" className="input" id='filter-check-1' />
                                            <span className="mark"></span> 
                                        </label>
                                        <label htmlFor="filter-check-1">Testing 1</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox_wrap">
                                        <label className="checkbox"> 
                                            <input type="checkbox" className="input" id='filter-check-2' />
                                            <span className="mark"></span> 
                                        </label>
                                        <label htmlFor="filter-check-2">Testing 2</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox_wrap">
                                        <label className="checkbox"> 
                                            <input type="checkbox" className="input" id='filter-check-3' />
                                            <span className="mark"></span> 
                                        </label>
                                        <label htmlFor="filter-check-3">Testing 3</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox_wrap">
                                        <label className="checkbox"> 
                                            <input type="checkbox" className="input" id='filter-check-4' />
                                            <span className="mark"></span> 
                                        </label>
                                        <label htmlFor="filter-check-4">Testing 4</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox_wrap">
                                        <label className="checkbox"> 
                                            <input type="checkbox" className="input" id='filter-check-5' />
                                            <span className="mark"></span> 
                                        </label>
                                        <label htmlFor="filter-check-5">Testing 5</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox_wrap">
                                        <label className="checkbox"> 
                                            <input type="checkbox" className="input" id='filter-check-6' />
                                            <span className="mark"></span> 
                                        </label>
                                        <label htmlFor="filter-check-6">Testing 6</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox_wrap">
                                        <label className="checkbox"> 
                                            <input type="checkbox" className="input" id='filter-check-7' />
                                            <span className="mark"></span> 
                                        </label>
                                        <label htmlFor="filter-check-7">Testing 7</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox_wrap">
                                        <label className="checkbox"> 
                                            <input type="checkbox" className="input" id='filter-check-8' />
                                            <span className="mark"></span> 
                                        </label>
                                        <label htmlFor="filter-check-8">Testing 8</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ul className="tabs">
                    <li className='active'>Diagnosis</li>
                    <li>Treatments</li>
                </ul>

                <div className="tab_content">
                    <div className="table-container tab-item show" id='diagnosis'>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Column 1
                                    </th>
                                    <th>Column 2</th>
                                    <th>Column 3</th>
                                    <th>Column 4</th>
                                    <th>Column 5</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="paging">
                        <button className="btn prev"><i className="ri-arrow-left-line"></i>Previous</button>
                        <ul>
                            <li className='active'>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                        </ul>
                        <button className="btn next"><i className="ri-arrow-right-line"></i>Next</button>
                    </div>
                    <div className="tab-item" id="treatments">
                        <h1>Treatments Tab Contant</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard