import { useState } from "react";
import { Button } from "@/components/ui/button";
import SizeChartDialog from "@/components/size-chart-dialog";

const bentoItems = [
	{
		area: "box1",
		icon: "🐶",
		title: "Moda para todos",
		description: "Tallas desde 0 hasta 7 para cada perrito.",
		button: {
			label: "Ver tabla de tallas",
			action: "openSizeChart",
		},
	},
	{
		area: "box2",
		icon: "💳",
		title: "Paga como prefieras",
		description: "Yape, Plin y transferencias sin recargos.",
	},
	{
		area: "box3",
		icon: "🚚",
		title: "Delivery Gratis",
		description: "En San Borja, Lince y San Isidro.",
	},
	{
		area: "box4",
		icon: "🎁",
		title: "Regalitos especiales",
		description: "Incluye galletitas 🦴 por cada compra.",
	},
	{
		area: "box5",
		icon: "🎯",
		title: "Acumula puntos",
		description: "1 punto por cada 2 soles. Canjeables.",
		extra: [
			"🎁 100 puntos = delivery gratis",
			"🎁 200 puntos = bolsa de snacks",
			"🎁 300 puntos = 10% OFF en tu próxima compra",
		],
	},
];

const BenefictsSection = () => {
	const [showSizeChart, setShowSizeChart] = useState(false);

	const handleAction = (action: string) => {
		if (action === "openSizeChart") {
			setShowSizeChart(true);
		}
	};
	return (
		<div className="benefits-section">
			<h2 className="text-2xl font-bold mb-6 text-center">Beneficios de comprar en Nopaath Pets</h2>
			<div className="grid-container w-full">
				{bentoItems.map((item, i) => (
					<section
						key={i}
						aria-labelledby={`benefit-title-${i}`}
						className="p-5 border rounded-2xl shadow-sm bg-card text-card-foreground"
						style={{ gridArea: item.area }}
					>
						<div className="text-3xl mb-2" aria-hidden="true">
							{item.icon}
						</div>
						<h3 id={`benefit-title-${i}`} className="text-lg font-semibold mb-1">
							{item.title}
						</h3>
						<p className="text-sm opacity-80 mb-2">{item.description}</p>
						{item.extra && (
							<ul className="text-sm opacity-80 list-disc ml-4 space-y-1">
								{item.extra.map((line, idx) => (
									<li key={idx}>{line}</li>
								))}
							</ul>
						)}
						{item.button && (
							<Button variant={"secondary"} onClick={() => handleAction(item.button.action)}>
								{item.button.label}
							</Button>
						)}
					</section>
				))}
			</div>
			<SizeChartDialog showSizeChart={showSizeChart} setShowSizeChart={setShowSizeChart} />
		</div>
	);
};

export default BenefictsSection;
