interface ServiceProps {
  params: {
    data: string[];
  };
}
export default function Service({ params }: ServiceProps) {
  const [serviceId, area, some] = params.data;
  return (
    <div>
      Service: {serviceId}, {area}, {some}
    </div>
  );
}
