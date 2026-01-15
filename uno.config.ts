import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	presetWind4,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetWind4(),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
			extraProperties: { display: "inline-block" },
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
