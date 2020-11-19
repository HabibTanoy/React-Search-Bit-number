import React from 'react';

const PricingPlans = () => {
  return (
    <div className='pricing-plans wrapper'>
      <div>
        <div className='heading'>
          <h1>Find the perfect plan for your business</h1>
          <a style={{color:'#488DE0'}} href="https://docs.barikoi.com/docs/pricing-call/" target="_blank">API Usage and Pricing Clarification</a>

        </div>


        <div className='pricing-plans-grid'>
          <div className='pricing-card'>
            <div className='pricing-plan-content'>
              <div className='title'>
                <h2>Developer</h2>
                <p className='p-light-small'>
                  <span>&#2547;</span>0 / mo
                </p>
              </div>

              <div className='list'>
                <p className='p-light-smaller'>30,000 API calls</p>
                <p className='p-light-smaller'>2000 Daily Limit</p>
                <p className='p-light-smaller'>Pay As You Go</p>
                <p className='p-light-smaller'>
                  Additional Calls <span>&#2547;</span>0.15
                </p>
              </div>

              <div className='pricing-plan-btn'>
                <a href='https://developer.barikoi.com/'>
                  <button className='btn plan-btn'>Get Started</button>
                </a>
              </div>
            </div>
          </div>

          <div className='pricing-card'>
            <div className='pricing-plan-content'>
              <div className='title'>
                <h2>StartUp</h2>
                <p className='p-light-small'>
                  <span>&#2547;</span>2500 / mo
                </p>
              </div>

              <div className='list'>
                <p className='p-light-smaller'>75,000 API Calls</p>
                <p className='p-light-smaller'>No Daily Limit</p>
                <p className='p-light-smaller'>Monthly Billing</p>
                <p className='p-light-smaller'>
                  Additional Calls <span>&#2547;</span>0.10{' '}
                </p>
              </div>

              <div className='pricing-plan-btn'>
                <a href='https://developer.barikoi.com/'>
                  <button className='btn plan-btn'>Get Started</button>
                </a>
              </div>
            </div>
          </div>

          <div className='pricing-card'>
            <div className='pricing-plan-content'>
              <div className='title'>
                <h2>Business</h2>
                <p className='p-light-small'>
                  <span>&#2547;</span>10000 / mo
                </p>
              </div>

              <div className='list'>
                <p className='p-light-smaller'>400,000 API Calls</p>
                <p className='p-light-smaller'>No Daily Limit</p>
                <p className='p-light-smaller'>Monthly Billing</p>
                <p className='p-light-smaller'>
                  Additional Calls <span>&#2547;</span>0.075
                </p>
              </div>

              <div className='pricing-plan-btn'>
                <a href='https://developer.barikoi.com/'>
                  <button className='btn plan-btn'>Get Started</button>
                </a>
              </div>
            </div>
          </div>

          <div className='pricing-card'>
            <div className='pricing-plan-content'>
              <div className='title'>
                <h2>Growth</h2>
                <p className='p-light-small'>
                  <span>&#2547;</span>25000 / mo
                </p>
              </div>

              <div className='list'>
                <p className='p-light-smaller'>1000,000 API Calls</p>
                <p className='p-light-smaller'>No Daily Limit</p>
                <p className='p-light-smaller'>Analytics Support</p>
                <p className='p-light-smaller'>
                  Additional Calls <span>&#2547;</span>0.05
                </p>
              </div>

              <div className='pricing-plan-btn'>
                <a href='https://developer.barikoi.com/'>
                  <button className='btn plan-btn'>Get Started</button>
                </a>
              </div>
            </div>
          </div>

          <div className='pricing-card'>
            <div className='pricing-plan-content'>
              <div className='title'>
                <h2>Enterprise</h2>
                <p className='p-light-small'>
                  {' '}
                  <span>&#2547;</span>Custom / mo
                </p>
              </div>

              <div className='list'>
                <p className='p-light-smaller'>Custom Limit</p>
                <p className='p-light-smaller'>Dedicated Server</p>
                <p className='p-light-smaller'>Analytics Support</p>
                <p className='p-light-smaller'>Custom API Support</p>
              </div>

              <div className='pricing-plan-btn'>
                <a href="mailto:hello@barikoi.com?Subject=Barikoi%20API%20Query" target="_top">
                  <button className='btn plan-btn blue-btn'>
                    Contact Sales
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
