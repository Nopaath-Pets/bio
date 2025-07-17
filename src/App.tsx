import BenefictsSection from "./components/beneficts-section";
import InstagramSection from "./components/instagram-section";
import LinksSection from "./components/links-section";
import ProfileSection from "./components/profile-section";

function App() {
	return (
		<div className="w-full relative">
			<div
				className="fixed inset-0 z-0"
				style={{
					backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f77f00 100%)
      `,
					backgroundSize: "100% 100%",
				}}
			/>
			<div className="max-w-[900px] mx-auto flex flex-col items-center justify-center gap-8 p-4 relative z-10">
				<ProfileSection />
				<LinksSection />
				<BenefictsSection />
				<InstagramSection />
			</div>
		</div>
	);
}

export default App;
