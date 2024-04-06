import React from 'react';
import photo from '../../assets/alnwick-castle.png';
import ContentWrapper from '../contentWrapper/ContentWrapper.jsx';

import './locations.scss';

const Locations = () => {
    return (
        <div>
            <ContentWrapper>
                <div className='flexcontainer'>
                    <div className='left'>
                        <div className='title'>Filming Locations!</div>
                        <div className='info'>
                            <div className='infoItem'>
                                <span className='text bold'>Alnwick Castle{" "}</span>
                                <span className='text'>Northumberland, England, UK</span>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='infoItem'>
                                <span className='text bold'>Handyside Bridge, King's Cross Railway Station{" "}</span>
                                <span className='text'>London, England, UK</span>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='infoItem'>
                                <span className='text bold'>Gloucester Cathedral{" "}</span>
                                <span className='text'>Gloucestershire, England, UK</span>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='infoItem'>
                                <span className='text bold'>Bodleian Library, Oxford University{" "}</span>
                                <span className='text'>Oxfordshire, England, UK</span>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='infoItem'>
                                <span className='text bold'>Christ Church College, Oxford University{" "}</span>
                                <span className='text'>Oxfordshire, England, UK</span>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='infoItem'>
                                <span className='text'>Load more ...</span>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <img className='mapImg' src={photo} alt=''/>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Locations;