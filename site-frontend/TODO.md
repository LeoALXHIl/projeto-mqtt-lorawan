# TODO: Build Angular Frontend for MQTT & LoRaWAN

## Steps from Approved Plan

1. [x] Create MQTT module with routing.
2. [x] Generate MQTT components: header, what-is, ficha-tecnica, casos-sucesso, alerta.
3. [x] Create LoRaWAN module with routing.
4. [x] Generate LoRaWAN components: header, what-is, ficha-tecnica, casos-sucesso, alerta.
5. [x] Update app.routes.ts with lazy-loaded routes for /mqtt and /lorawan.
6. [x] Create shared header and footer components.
7. [x] Update core.module.ts and shared.module.ts to export shared components.
8. [x] Update app.ts/app.html to include shared header/footer.
9. [x] Create global theme in styles.scss.
10. [x] Add placeholder assets in src/assets/images.
11. [x] Implement enhanced content in all component HTML (added diagrams, more specs, cases, alerts).
12. [x] Add basic unit tests in .spec.ts files (tests exist, but fail due to Zone.js config).
13. [ ] Create Git branch, commit changes, push, open PR.
14. [x] Run ng build --configuration production (successful build to dist/).
15. [ ] (Optional) Deploy to GitHub Pages.
16. [x] Create GitHub Actions workflow for CI/CD (workflow exists).
17. [ ] Test changes: Run `ng serve` and verify in browser.
18. [x] Update TODO.md with completions and finalize.
