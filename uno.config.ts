import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetWind4,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
	presets: [
		presetWind4(),
		presetAttributify(),
		presetAnimations(),
		presetIcons({
			scale: 1.2,
			extraProperties: { display: "inline-block" },
		}),
		presetShadcn({ color: "neutral" }),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				"(components|src|lib)/**/*.{js,ts,svelte}",
			],
		},
	},
});
