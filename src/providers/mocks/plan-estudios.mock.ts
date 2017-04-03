export var ESTUDIOS: Array <any> = [
	{
		'año':'1', 'materias':[
			{'numero':'1', 'nombre':'Análisis Matemático I' , 'regimen':'A', 'correlatividades':'-'},  
			{'numero':'2', 'nombre':'Química', 'regimen':'C', 'correlatividades':'-'},
			{'numero':'3', 'nombre':'Álgebra ', 'regimen':'A', 'correlatividades':'-'},
			{'numero':'4', 'nombre':'Física I', 'regimen':'A', 'correlatividades':'-'},
			{'numero':'5', 'nombre':'Sistemas de Representación ', 'regimen':'A', 'correlatividades':'-'},
			{'numero':'6', 'nombre':'Fundamentos de Informática', 'regimen':'C', 'correlatividades':'-'},
			{'numero':'7', 'nombre':'Geometría Analítica', 'regimen':'C', 'correlatividades':'-'},
		]
	},
	{
		'año':'2', 'materias':[
		{'numero':'8', 'nombre':'Análisis Matemático II', 'regimen':'C', 'correlatividades':'1-2-7'},
		{'numero':'9', 'nombre':'Física II', 'regimen':'A', 'correlatividades':'1-4'},
		{'numero':'10', 'nombre':'Matemática Discreta y Lógica', 'regimen':'C', 'correlatividades':'2-6'},
		{'numero':'11', 'nombre':'Taller de Ingles I', 'regimen':'C', 'correlatividades':'-'},
		{'numero':'12', 'nombre':'Programación I', 'regimen':'C', 'correlatividades':'2-6'},
		{'numero':'13', 'nombre':'Probabilidad y Estadística', 'regimen':'C', 'correlatividades':'1-2'},
		{'numero':'14', 'nombre':'Cálculo Avanzado', 'regimen':'C', 'correlatividades':'8'},
		{'numero':'15', 'nombre':'Programación II', 'regimen':'C', 'correlatividades':'10-12'},
		{'numero':'16', 'nombre':'Estructura de Datos y Algoritmos', 'regimen':'C', 'correlatividades':'10-12'},
		{'numero':'17', 'nombre':'Arquitectura de Computadores', 'regimen':'C', 'correlatividades':'3-10'},
	]},
	{
		'año':'3', 'materias':[
		{'numero':'18', 'nombre':'Taller de Ingles II', 'regimen':'C', 'correlatividades':'11'},
		{'numero':'19', 'nombre':'Lenguajes Formales y Autómatas', 'regimen':'C', 'correlatividades':'15-16-17'},
		{'numero':'20', 'nombre':'Base de Datos', 'regimen':'C', 'correlatividades':'15-16'},
		{'numero':'21', 'nombre':'Sistemas Operativos', 'regimen':'C', 'correlatividades':'15-16-17'},
		{'numero':'22', 'nombre':'Teoría de la Información y la Comunicación', 'regimen':'C', 'correlatividades':'9-13-14-17'},
		{'numero':'23', 'nombre':'Análisis Numérico', 'regimen':'C', 'correlatividades':'8'},
		{'numero':'24', 'nombre':'Modelos y Simulación', 'regimen':'C', 'correlatividades':'13-15'},
		{'numero':'25', 'nombre':'Ingeniería de Software I', 'regimen':'C', 'correlatividades':'15-16'},
		{'numero':'26', 'nombre':'Programación III', 'regimen':'C', 'correlatividades':'20'},
		{'numero':'27', 'nombre':'Redes de Computadoras', 'regimen':'C', 'correlatividades':'5-22'},
	]},

	{
		'año':'4', 'materias':[
		{'numero':'28', 'nombre':'Ingeniería de Software II ', 'regimen':'C', 'correlatividades':'24-25-26'}, 
		{'numero':'29', 'nombre':'Economía', 'regimen':'C', 'correlatividades':'13-23'},
		{'numero':'30', 'nombre':'Organización Empresarial', 'regimen':'C', 'correlatividades':'24-25'},
		{'numero':'31', 'nombre':'Electiva I ', 'regimen':'C', 'correlatividades':'-'},
		{'numero':'32', 'nombre':'Sistemas de Tiempo Real ', 'regimen':'C', 'correlatividades':'19-21-24-25'},
		{'numero':'33', 'nombre':'Arquitectura de Software', 'regimen':'C', 'correlatividades':'27-28'},
		{'numero':'34', 'nombre':'Ética y Legislación ', 'regimen':'C', 'correlatividades':'29-30'},
		{'numero':'35', 'nombre':'Electiva II', 'regimen':'C', 'correlatividades':'-'},
		{'numero':'36', 'nombre':'Ingeniería del Software III', 'regimen':'C', 'correlatividades':'28'},
		{'numero':'37', 'nombre':'Seguridad Laboral y Gestión Ambiental', 'regimen':'C', 'correlatividades':'22'},
	]},
	{
		'año':'5', 'materias':[
		{'numero':'38', 'nombre':'Reingeniería de Procesos y de Sistemas de Información', 'regimen':'C', 'correlatividades':'34-36'},  
		{'numero':'39', 'nombre':'Auditoría Informática', 'regimen':'C', 'correlatividades':'34-36-37'},
		{'numero':'40', 'nombre':'Calidad y Certificación del Proceso de Producción del Software', 'regimen':'C', 'correlatividades':'34-36'},
		{'numero':'41', 'nombre':'Electiva III ', 'regimen':'C', 'correlatividades':'-'},
		{'numero':'42', 'nombre':'Sistemas Inteligentes', 'regimen':'C', 'correlatividades':'32-33'},
		{'numero':'43', 'nombre':'Práctica Profesional Supervisada', 'regimen':'C', 'correlatividades':'24-25-26-27'},
		{'numero':'44', 'nombre':'Proyecto Integrador', 'regimen':'C', 'correlatividades':'-'},
	]},	
	
	{
		'año':'Electivas', 'materias':[	
		{'numero':'A1', 'nombre':'Protocolos de Comunicación', 'regimen':'C', 'correlatividades':'27'},
		{'numero':'A2', 'nombre':'Administración de Redes', 'regimen':'C', 'correlatividades':'A1'},
		{'numero':'A3', 'nombre':'Seguridad de Redes', 'regimen':'C', 'correlatividades':'A2'},

		{'numero':'B1', 'nombre':'Tecnología e Ingeniería Web', 'regimen':'C', 'correlatividades':'26'},
		{'numero':'B2', 'nombre':'Entornos Virtuales de Trabajo Colaborativo', 'regimen':'C', 'correlatividades':'B1'},
		{'numero':'B3', 'nombre':'Gestión en la Web', 'regimen':'C', 'correlatividades':'B2'},
		
		{'numero':'C1', 'nombre':'Gestión del Conocimiento y Aprendizaje Organizacional', 'regimen':'C', 'correlatividades':'24'},
		{'numero':'C2', 'nombre':'Inteligencia Empresarial ', 'regimen':'C', 'correlatividades':'C1-29-30'},
		{'numero':'C3', 'nombre':'Minería de Datos y Data Warehouse', 'regimen':'C', 'correlatividades':'C2'},
		
		{'numero':'D1', 'nombre':'Procesamiento Digital de Imágenes', 'regimen':'C', 'correlatividades':'26'},
		{'numero':'D2', 'nombre':'Lenguajes y Arquitecturas para Geoservicios ', 'regimen':'C', 'correlatividades':'D1-27'},
		{'numero':'D3', 'nombre':'Infraestructura de Datos Espaciales', 'regimen':'C', 'correlatividades':'D2'}
	]},
] 

