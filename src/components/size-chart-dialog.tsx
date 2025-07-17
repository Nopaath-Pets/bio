import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const sizes = [
	{ talla: 0, cuello: "25-26", pecho: "35-36", lomo: "25-26" },
	{ talla: 1, cuello: "26-28", pecho: "40-42", lomo: "33-34" },
	{ talla: 2, cuello: "32-34", pecho: "46-48", lomo: "37-38" },
	{ talla: 3, cuello: "38-40", pecho: "54-56", lomo: "42-44" },
	{ talla: 4, cuello: "42-44", pecho: "64-66", lomo: "44-46" },
	{ talla: 5, cuello: "44-46", pecho: "70-72", lomo: "49-50" },
	{ talla: 6, cuello: "47-50", pecho: "72-78", lomo: "55-62" },
	{ talla: 7, cuello: "52-55", pecho: "82-88", lomo: "64-71" },
];

const SizeChartDialog = ({
	showSizeChart,
	setShowSizeChart,
}: {
	showSizeChart: boolean;
	setShowSizeChart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<Dialog open={showSizeChart} onOpenChange={setShowSizeChart}>
			<DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
				<DialogHeader className="contents space-y-0 text-left">
					<DialogTitle className="border-b px-6 py-4 text-base">Medidas de tamaño</DialogTitle>
					<div className="overflow-y-auto">
						<DialogDescription asChild>
							<div className="px-6 py-4">
								<table className="w-full text-sm text-left rounded-md overflow-hidden">
									<caption className="sr-only">Tabla de medidas para tallas de ropa para perros</caption>
									<thead className="bg-secondary text-secondary-foreground">
										<tr>
											<th scope="col" className="px-4 py-2">
												Talla
											</th>
											<th scope="col" className="px-4 py-2">
												Cuello (cm)
											</th>
											<th scope="col" className="px-4 py-2">
												Pecho (cm)
											</th>
											<th scope="col" className="px-4 py-2">
												Lomo (cm)
											</th>
										</tr>
									</thead>
									<tbody>
										{sizes.map((row) => (
											<tr key={row.talla} className="border-t border-border">
												<td className="px-4 py-2 font-medium">T{row.talla}</td>
												<td className="px-4 py-2">{row.cuello}</td>
												<td className="px-4 py-2">{row.pecho}</td>
												<td className="px-4 py-2">{row.lomo}</td>
											</tr>
										))}
									</tbody>
								</table>
								<p className="mt-2 text-xs text-gray-600 italic">
									Nota: Todas las medidas están expresadas en centímetros (cm).
								</p>
							</div>
						</DialogDescription>
						<DialogFooter className="px-6 pb-6 justify-end">
							<DialogClose asChild>
								<Button variant={"secondary"} type="button">
									Continuar
								</Button>
							</DialogClose>
						</DialogFooter>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default SizeChartDialog;
