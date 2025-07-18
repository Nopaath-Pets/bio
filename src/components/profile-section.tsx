import { BadgeCheck } from "lucide-react";
import Logo from "@/components/ui/logos";

const ProfileSection = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<div className="relative w-32 h-32 mx-auto flex items-center justify-center">
				<div className="absolute inset-0 bg-gradient-to-r from-[#F77F00] to-[#FFE27A] rounded-full blur-lg opacity-30 animate-pulse" />
				<div className="relative w-full h-full object-cover rounded-full border-4 border-bg-border dark:border-gray-800 shadow-xl flex items-center justify-center">
					<Logo name="icon-light" className="w-22 h-22" />
				</div>
			</div>
			<h1 className="font-fredoka text-4xl font-bold text-center flex items-center justify-center gap-2">
				Nopaath Pets <BadgeCheck size={16} strokeWidth={2.5} className="text-primary" />
			</h1>
			<p className="text-center">
				En Nopaath Pets 🐾 amamos a los perros y ofrecemos <strong>ropa para perros</strong> y{" "}
				<strong>accesorios para mascotas</strong> modernos, cómodos y de alta calidad para que tu peludo luzca increíble
				🐕✨. Nos destacamos por una atención rápida, cercana y un packaging hecho con cariño 🎁💖. Queremos que cada
				compra sea una experiencia única y divertida. ¡Únete a la familia Nopaath y dale a tu mejor amigo el estilo que
				merece! 🎉👕
			</p>
		</div>
	);
};

export default ProfileSection;
