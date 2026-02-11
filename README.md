## 🚀 Proyecto de Pruebas de Performance – Apache JMeter
📌 Descripción General

Este proyecto contiene la implementación completa de pruebas de rendimiento utilizando Apache JMeter, incluyendo:

* Pruebas de Carga

* Pruebas de Estrés

* Pruebas de Pico (Spike)

* Pruebas de Concurrencia

El objetivo fue evaluar el comportamiento del sistema bajo diferentes niveles de tráfico, medir métricas clave de rendimiento e identificar posibles puntos de degradación.

🛠 Herramientas Utilizadas

* Apache JMeter

* CSV Data Set Config

* HTML Dashboard Report

* Git & GitHub

🎯 Escenarios Ejecutados
--

1️⃣ Prueba de Carga

25 usuarios

Ramp-up: 10 segundos

Duración: 300 segundos

Objetivo: Validar estabilidad bajo carga esperada.
-- 

2️⃣ Prueba de Estrés

100 usuarios

Ramp-up: 10 segundos

Duración: 120 segundos

Objetivo: Evaluar comportamiento bajo alta demanda y observar degradación del sistema.
--

3️⃣ Prueba de Pico (Spike)

500 usuarios

Ramp-up: 1 segundo

Duración: 60 segundos

Loop infinito activado

Objetivo: Medir la reacción del sistema ante incrementos súbitos de tráfico.
--

4️⃣ Pruebas de Concurrencia

Niveles bajo, medio y alto

Objetivo: Analizar estabilidad del tiempo de respuesta y throughput.
--

📊 Resumen de Resultados
Tipo de Prueba	Usuarios	Tiempo Promedio	Tiempo Máximo	% Error
Carga	25	~75 ms	~1300 ms	0%
Estrés	100	~256 ms	~8199 ms	0%
Pico	500	~1364 ms	~109996 ms	0%

--

🔎 Observaciones Técnicas

El sistema mantuvo estabilidad con 0% de errores en todos los escenarios.

En pruebas de pico se evidenció incremento considerable en tiempos máximos de respuesta.

El throughput escaló proporcionalmente al aumento de usuarios concurrentes.

No se presentaron errores HTTP (4xx / 5xx) durante las pruebas.

📁 Estructura del Proyecto
performance-testing-jmeter/

│

├──html_reports/

├── results/

├── Plan_Pruebas_Performance.jmx

├── users.csv

├── Informe_Final_Pruebas_Performance_JMeter.docx

└── Presentacion_Pruebas_Performance.pptx

--

▶️ Ejecución en Modo No GUI
jmeter.bat -n -t "Plan_Pruebas_Performance.jmx" -l resultado.jtl -e -o reporte_html

📈 Reportes Generados

Se generaron reportes HTML automáticos para cada escenario:

* Reporte de Carga

* Reporte de Estrés

* Reporte de Pico

* Reportes de Concurrencia

🧠 Conclusión Final

La aplicación demostró estabilidad y escalabilidad bajo diferentes condiciones de carga.

Aunque en escenarios de pico se incrementaron significativamente los tiempos máximos de respuesta, el sistema mantuvo disponibilidad y no presentó fallos.
