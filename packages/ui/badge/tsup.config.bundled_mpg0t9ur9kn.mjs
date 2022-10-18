// tsup.config.ts
import { defineConfig } from "tsup";
var tsup_config_default = defineConfig((options) => {
  return {
    minify: !options.watch,
    entry: ["src"],
    splitting: true,
    sourcemap: true,
    dts: true,
    external: ["react", "react-dom"],
    format: ["cjs", "esm"],
    target: "esnext",
    platform: "browser",
    bundle: false
  };
});
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3RzdXAnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygob3B0aW9ucykgPT4ge1xuICByZXR1cm4ge1xuICAgIG1pbmlmeTogIW9wdGlvbnMud2F0Y2gsXG4gICAgZW50cnk6IFsnc3JjJ10sXG4gICAgc3BsaXR0aW5nOiB0cnVlLFxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICBkdHM6IHRydWUsXG4gICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgZm9ybWF0OiBbJ2NqcycsICdlc20nXSxcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIHBsYXRmb3JtOiAnYnJvd3NlcicsXG4gICAgYnVuZGxlOiBmYWxzZSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjtBQUU3QixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxZQUFZO0FBQ3ZDLFNBQU87QUFBQSxJQUNMLFFBQVEsQ0FBQyxRQUFRO0FBQUEsSUFDakIsT0FBTyxDQUFDLEtBQUs7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxJQUNYLEtBQUs7QUFBQSxJQUNMLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxJQUMvQixRQUFRLENBQUMsT0FBTyxLQUFLO0FBQUEsSUFDckIsUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
