// components/LandingPage.tsx
import Image from 'next/image';
// import potluckImage from '../public/potluck.jpg';
// import logo from '../public/logo.png';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <Image src={"/logo.png"} alt="PotLockToken Logo" width={200} height={200} />
      <h1 className="text-4xl font-bold mt-4">What will you bring to the PotLock?</h1>
      <Image src={"/potluckImage.png"} alt="Potluck Dinner" width={600} height={400} className="mt-4 rounded-lg" />
      <div className="mt-8 px-4">
        <p className="text-lg">Description of the token and its contract address.</p>
        <p className="text-lg">Tokenomics details here.</p>
        <p className="text-lg">How to be a part of the PotLock.</p>
        <p className="text-sm text-red-600">Disclaimer: Investing in this token can incur losses.</p>
      </div>
    </div>
  );
};

export default LandingPage;
