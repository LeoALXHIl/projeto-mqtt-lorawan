import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-mqtt-oque',
	standalone: true,
	imports: [CommonModule],
	template: `
		<section class="mqtt-oque-section">
			<h1>O que é MQTT?</h1>
			<div class="explicacao">
				<p>
					<strong>MQTT</strong> é como um <b>mensageiro que entrega bilhetes de forma rápida e leve</b>.<br>
					Imagine várias pessoas querendo enviar e receber recados sem se preocupar com quem está ouvindo ou enviando. O mensageiro (<b>Broker MQTT</b>) recebe os bilhetes (mensagens) e entrega apenas para quem pediu para receber aquele tipo de recado (assinantes). Isso torna a comunicação eficiente, leve e organizada.
				</p>
			</div>
			<div class="diagrama">
				<h2>Diagrama Publish/Subscribe</h2>
				<svg width="100%" height="180" viewBox="0 0 600 180">
					<rect x="30" y="60" width="120" height="60" rx="15" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
					<text x="90" y="95" text-anchor="middle" font-size="18" fill="#1976d2">Publicador</text>
					<rect x="200" y="60" width="120" height="60" rx="15" fill="#fffde7" stroke="#fbc02d" stroke-width="2"/>
					<text x="260" y="95" text-anchor="middle" font-size="18" fill="#fbc02d">Broker MQTT</text>
					<rect x="400" y="30" width="150" height="50" rx="15" fill="#e8f5e9" stroke="#388e3c" stroke-width="2"/>
					<text x="475" y="60" text-anchor="middle" font-size="16" fill="#388e3c">Assinante 1</text>
					<rect x="400" y="100" width="150" height="50" rx="15" fill="#e8f5e9" stroke="#388e3c" stroke-width="2"/>
					<text x="475" y="130" text-anchor="middle" font-size="16" fill="#388e3c">Assinante 2</text>
					<polygon points="150,90 200,90" fill="none" stroke="#1976d2" stroke-width="3" marker-end="url(#arrow)"/>
					<polygon points="320,90 400,55" fill="none" stroke="#fbc02d" stroke-width="3" marker-end="url(#arrow)"/>
					<polygon points="320,90 400,125" fill="none" stroke="#fbc02d" stroke-width="3" marker-end="url(#arrow)"/>
					<defs>
						<marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto" markerUnits="strokeWidth">
							<path d="M0,0 L10,5 L0,10 L2,5 Z" fill="#1976d2" />
						</marker>
					</defs>
				</svg>
				<p class="diagrama-legenda">O publicador envia uma mensagem ao Broker, que distribui para todos os assinantes do tópico.</p>
			</div>
			<div class="exemplos">
				<h2>Exemplos de uso</h2>
				<ul>
					<li><b>IoT:</b> Sensores enviando dados para sistemas de monitoramento.</li>
					<li><b>Chat:</b> Aplicativos de mensagem instantânea.</li>
					<li><b>Automação:</b> Controle de dispositivos inteligentes.</li>
				</ul>
			</div>
		</section>
	`,
	styles: [`
		.mqtt-oque-section {
			max-width: 800px;
			margin: 2rem auto;
			padding: 2rem;
			background: #fafafa;
			border-radius: 18px;
			box-shadow: 0 2px 16px rgba(0,0,0,0.07);
			font-family: 'Segoe UI', Arial, sans-serif;
		}
		h1, h2 {
			color: #1976d2;
			margin-bottom: 1rem;
		}
		.explicacao p {
			font-size: 1.2rem;
			color: #333;
			background: #e3f2fd;
			padding: 1rem;
			border-radius: 10px;
			margin-bottom: 2rem;
		}
		.diagrama {
			margin: 2rem 0;
			text-align: center;
		}
		.diagrama-legenda {
			font-size: 1rem;
			color: #555;
			margin-top: 0.5rem;
		}
		.exemplos ul {
			list-style: disc inside;
			font-size: 1.1rem;
			color: #444;
			margin: 1rem 0 0 0;
			padding: 0;
		}
		.exemplos li {
			margin-bottom: 0.5rem;
		}
		@media (max-width: 600px) {
			.mqtt-oque-section {
				padding: 1rem;
			}
			svg {
				width: 100% !important;
				height: 120px !important;
			}
		}
	`]
})
export class MqttOqueComponent {}
