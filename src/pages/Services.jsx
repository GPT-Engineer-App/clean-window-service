import Image from "next/image";

const Services = () => {
  return (
    <div className="text-center space-y-8">
      <Image src="/images/services.jpg" alt="Window cleaning services" width={1200} height={600} className="rounded-lg" />
      <h1 className="text-4xl font-bold">Vores Tjenester</h1>
      <p className="text-lg">Vi tilbyder en række vinduespudsningsydelser til private og erhverv.</p>
      <ul className="list-disc list-inside">
        <li>Privat Vinduespudsning</li>
        <li>Erhvervs Vinduespudsning</li>
        <li>Højhus Vinduespudsning</li>
        <li>Rengøring af Skærme</li>
        <li>Rengøring af Tagrender</li>
      </ul>
    </div>
  );
};

export default Services;