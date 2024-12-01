import Link from 'next/link';
import React from 'react';
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
import PageBanner from "../components/Common/PageBanner";

const subscription = () => {
  return (
    <>
    
    <Navbar/>
    <PageBanner
        pageTitle="Subscription"
        homePageUrl="/subscription"
        homePageText="subscription"
        activePageText="subscription"
        bgImage="page-title-one"
      />
    <div style={{  padding: '64px 16px' }}>
      <h2 style={{textAlign:'center'}}>Package for subscribe</h2>
      <div aria-hidden="true" style={{ position: 'absolute', inset: '0', maxHeight: '100%', width: '100%', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '-52px', opacity: '0.2' }}>
        <div style={{ filter: 'blur(106px)', height: '56px', background: 'linear-gradient(to bottom right, #4C1D95, #1E3A8A)' }}></div>
        <div style={{ filter: 'blur(106px)', height: '32px', background: 'linear-gradient(to right, #22D3EE, #4F46E5)' }}></div>
      </div>
      <div style={{ maxWidth: '80rem', margin: 'auto', padding: '0 24px', '@media (min-width: 768px)': { padding: '0 48px' }, '@media (min-width: 1280px)': { padding: '0 24px' } }}>
        <div style={{  textAlign: 'center', '@media (min-width: 768px)': { padding: '0' } }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', '@media (min-width: 640px)': { fontSize: '2rem' }, '@media (min-width: 768px)': { fontSize: '2.25rem' } }}>Pricing</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', '@media (min-width: 640px)': { flexDirection: 'row', alignItems: 'stretch' } }}>
          <PricingCard
            title="Starter"
            price="$19"
            features={[
              "Exapmle1",
              "Hosppital Dummy Data Here",
              "Dummy Data 2",
              "24/7 Availabiltiy"
            ]}
            link="https://example.com/starter-plan"
          />
          <PricingCard
            title="Pro"
            price="$49"
            features={[
              "Exapmle2",
              "Hosppital Dummy Data Here",
              "Dummy Data 2",
              "24/7 Availabiltiy"
            ]}
            link="https://example.com/pro-plan"
          />
          <PricingCard
            title="Business"
            price="$99"
            features={[
              "Exapmle4",
              "Hosppital Dummy Data Here",
              "Dummy Data 2",
              "24/7 Availabiltiy"
            ]}
            link="https://example.com/business-plan"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

const PricingCard = ({ title, price, features, link }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px', '@media (min-width: 640px)': { padding: '32px' }, border: '1px solid #0046c0', borderRadius: '24px', background: '#0046c0', boxShadow: '0px 0px 10px rgba(156, 163, 175, 0.1)', margin: '8px', flex: '1', maxWidth: '28rem' }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#ffffff', marginBottom: '8px' }}>{title}</h2>
      <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#9CA3AF', marginTop: '16px', marginBottom: '32px' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>{price}</span> / Month
      </p>
      <ul style={{ listStyle: 'none', textAlign: 'center', color: '#9CA3AF', marginBottom: '24px' }}>
        {features.map((feature, index) => (
          <li key={index} style={{ fontWeight: index === 0 ? 'bold' : 'normal', color: index === 0 ? '#F59E0B' : '#9CA3AF' }}>{feature}</li>
        ))}
      </ul>
      <Link 
        style={{ position: 'relative', display: 'flex', height: '36px', width: '100%', alignItems: 'center', justifyContent: 'center', padding: '0 16px', transition: 'background-color 300ms', '@media (min-width: 640px)': { width: 'max-content' } }}
        href="/payment"><span style={{ position: 'relative', fontSize: '0.875rem', fontWeight: '400', color: 'white',border:'1px solid white',padding:'10px 20px', borderRadius:'5px' }}>Get Started</span></Link>
    </div>
  );
}

export default subscription;
