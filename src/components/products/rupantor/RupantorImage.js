import React, { useState, useEffect } from 'react';

const RupantorImage = () => {
  const [story1, setStory1] = useState(true);
  const [story2, setStory2] = useState(false);
  const [story3, setStory3] = useState(false);
  const [boxFinal, setBoxFinal] = useState(false);
  const [progressBar, setProgresBar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStory1(false);
      setStory2(true);
    }, 1500);

    setTimeout(() => {
      setStory2(false);
      setStory3(true);
    }, 2000);

    setTimeout(() => {
      setBoxFinal(true);
    }, 2500);

    setTimeout(() => {
      setProgresBar(true);
    }, 2800);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='rupantor-anim'>
      {/* First steps of animation */}
      <div
        className={`step-1 ${story1 ? 'show-flex-column' : 'hide-flex-column'}`}
        id='stp1'
      >
        <div className='box-1'>
          <div className='content'>
            <div className='block'>
              <div className='color-block-rupantor'></div>
              <div className='dots'></div>
            </div>

            <div className='content-card'>
              <div>
                <p className='p-light-smaller title'>Pickup Point</p>
              </div>
              <p className='p-light-small'>
                H 547, Block G, Bashundhara, <br />
                Dhaka
              </p>

              <div className='progress-bar animated'>
                <span className='bar'>
                  <span className='progress progress-5'></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='box-2'>
          <div className='content'>
            <div className='block'>
              <div className='color-block-rupantor'></div>
              <div className='dots'></div>
            </div>

            <div className='content-card'>
              <div>
                <p className='p-light-smaller title'>Delivery Address</p>
              </div>
              <p className='p-light-small'>
                34D, Mirpur, Pallabi, <br />
                Dhaka
              </p>

              <div className='progress-bar animated'>
                <span className='bar'>
                  <span className='progress progress-5'></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='box-3'>
          <div className='content'>
            <div className='block'>
              <div className='color-block-rupantor'></div>
              <div className='dots'></div>
            </div>

            <div className='content-card'>
              <div>
                <p className='p-light-smaller title'>Destination</p>
              </div>
              <p className='p-light-small'>264, R19, Dhanmondi</p>

              <div className='progress-bar animated'>
                <span className='bar'>
                  <span className='progress progress-5'></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second steps of animation */}
      <div
        className={`step-2 ${story2 ? 'show-flex-column' : 'hide-flex-column'}`}
        id='stp2'
      >
        <div className='box-1'>
          <div className='content'>
            <div className='block'>
              <div className='color-block-rupantor'></div>
              <div className='dots'></div>
            </div>

            <div className='content-card'>
              <div>
                <p className='p-light-smaller title'>Pickup Point</p>
              </div>
              <p className='p-light-small'>
                H 547, Road 11, Block G, <br />
                Bashundhara
              </p>

              <div className='progress-bar animated'>
                <span className='bar'>
                  <span className='progress progress-5-50'></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='box-2'>
          <div className='content'>
            <div className='block'>
              <div className='color-block-rupantor'></div>
              <div className='dots'></div>
            </div>

            <div className='content-card'>
              <div>
                <p className='p-light-smaller title'>Delivery Address</p>
              </div>
              <p className='p-light-small'>
                House 34D, Section 12, <br />
                Pallabi, Dhaka
              </p>

              <div className='progress-bar animated'>
                <span className='bar'>
                  <span className='progress progress-5-30'></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='box-3'>
          <div className='content'>
            <div className='block'>
              <div className='color-block-rupantor'></div>
              <div className='dots'></div>
            </div>

            <div className='content-card'>
              <div>
                <p className='p-light-smaller title'>Destination</p>
              </div>
              <p className='p-light-small'>H264, Road 19, Dhanmondi</p>

              <div className='progress-bar animated'>
                <span className='bar'>
                  <span className='progress progress-5-80'></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last steps of animation */}
      <div
        className={`step-3 ${story3 ? 'show-flex-column' : 'hide-flex-column'}`}
        id='stp3'
      >
        <div className={`box-1 ${boxFinal ? 'box1-final' : ''}`}>
          <div className='content'>
            <div className='block'>
              <div className='color-block-rupantor'></div>
              <div className='dots'></div>
            </div>

            <div className='content-card'>
              <div>
                <p className='p-light-smaller title'>Pickup Point</p>
              </div>
              <p className='p-light-small'>
                House 547, Road 11, Block G, <br />
                Bashundhara R/A, Dhaka
              </p>

              <div
                className={`progress-bar ${
                  progressBar ? 'hide-progress-bar' : ''
                }`}
              >
                {' '}
                <span className='bar'>
                  <span className='progress progress-50-100'></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`box-2 ${boxFinal ? 'box2-final' : ''}`}>
          <div className='content'>
            <div className='block'>
              <div className='color-block-rupantor'></div>
              <div className='dots'></div>
            </div>

            <div className='content-card'>
              <div>
                <p className='p-light-smaller title'>Delivery Address</p>
              </div>
              <p className='p-light-small'>
                House 34/D, Pallabi, <br />
                Mirpur, Dhaka
              </p>

              <div
                className={`progress-bar ${
                  progressBar ? 'hide-progress-bar' : ''
                }`}
              >
                <span className='bar'>
                  <span className='progress progress-30-100'></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`box-3 ${boxFinal ? 'box3-final' : ''}`}>
          <div className='content'>
            <div className='block'>
              <div className='color-block-rupantor'></div>
              <div className='dots'></div>
            </div>

            <div className='content-card'>
              <div>
                <p className='p-light-smaller title'>Destination</p>
              </div>
              <p className='p-light-small'>
                House 264, Road 19, <br />
                Dhanmondi, Dhaka
              </p>

              <div
                className={`progress-bar ${
                  progressBar ? 'hide-progress-bar' : ''
                }`}
              >
                <span className='bar'>
                  <span className='progress progress-80-100'></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RupantorImage;
