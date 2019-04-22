import React from 'react';

const GridList = () => {
  return (
    <section className="wrapper style1 align-center">
      <div className="inner">
        <h2>Give us a call <a href="tel:1-817-298-8924">(817) 298-8924</a></h2>
        <div className="items style1 medium onscroll-fade-in">
          <section>
            <span className="icon style2 major fa-paper-plane"></span>
            <h3>Towing</h3>
            <p>We'll tow to any lake in DFW.</p>
          </section>
          <section>
            <span className="icon style2 major fa-wifi"></span>
            <h3>Gas</h3>
            <p>All of our rentals are delivered with one complimentary tank of gas.</p>
          </section>
          <section>
            <span className="icon style2 major fa-diamond"></span>
            <h3>Best Price</h3>
            <p>At $250 for any jet ski for 6 hours, our prices can't be beat in DFW!</p>
          </section>
          <section>
            <span className="icon style2 major fa-save"></span>
            <h3>Book Online</h3>
            <p>Save time by using our request to book contact form to initiate the booking online.</p>
          </section>
          <section>
            <span className="icon style2 major fa-bolt"></span>
            <h3>Speedy Service</h3>
            <p>Give us a call for the items that need faster turn around times.</p>
          </section>
          <section>
            <span className="icon style2 major fa-cog"></span>
            <h3>Damage Deposit</h3>
            <p>There is a $250 refundable deposit to cover damages.</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default GridList;