import { usePosts } from "@/hooks/usePosts";
import { PostGrid } from "./instagram/post-grid";

const InstagramSection = () => {
	const { posts, isLoading, error, retry } = usePosts();
	return (
		<section aria-label="Últimas publicaciones de Instagram de Nopaath Pets" className="my-8 px-4">
			<h2 className="text-2xl font-bold mb-4 text-center">Síguenos en Instagram</h2>
			<p className="text-center text-sm mb-6">
				En Nopaath Pets compartimos momentos únicos con nuestros peluditos, mostrando nuestras últimas colecciones de
				ropa y accesorios para perros. Descubre inspiración, consejos para el cuidado de tu mascota y la moda más cómoda
				y moderna para tu mejor amigo. ¡Únete a nuestra comunidad y mantente al día con nuestras novedades y promociones
				exclusivas!
			</p>
			<PostGrid posts={posts} isLoading={isLoading} error={error} onRetry={retry} />
		</section>
	);
};

export default InstagramSection;
