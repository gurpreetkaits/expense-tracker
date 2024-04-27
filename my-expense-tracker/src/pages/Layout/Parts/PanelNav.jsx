import React from 'react';

const PanelNav = () => {
    return (
        <nav style={{ backgroundColor: 'white' }} className='my-5'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
                <div>
                    <span style={{ fontWeight: 'bold', fontSize: '20px' }} className='ms-9'>My Expense Manager</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '10px' }}>
                        
                    </span>
                    <span>
                        
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default PanelNav;