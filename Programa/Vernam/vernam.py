import sys
from operator import xor

opcion =''

opcion = str(input('¿cifrar (Presione c) o descifrar (Presione d)?'))
while opcion != 'c' and opcion != 'd':
	print ()
	print ('Opción no válida!')
	opcion = str(input('¿cifrar o descifrar?'))
print ()

if opcion == 'c':	# Cifrar
	mensaje = str(input("Introduzca el mensaje en claro: "))  # Se pide el mensaje en claro
	mensaje_binario = ''.join(bin(ord(x))[2:].zfill(8) for x in mensaje)	# Se pasa el mensaje a binario
	codigo = str(input("Introduzca la llave: "))  # Se pide la llave
	cifrado = ''

	print ('Mensaje en claro: ' + mensaje)
	print ('Mensaje en claro en binario: ' + mensaje_binario)
	print ('Longitud del mensaje binario:', len(mensaje_binario))
	print ('Criptograma: ' + codigo)

	for i, c in enumerate(mensaje, start=0):	# Para cada caracter del mensaje...
		aux_xor = xor(ord(c), ord(chr(int(codigo[i*8:(i+1)*8], base=2))))	# XOR entre el caracter y el byte correspondiente de la clave
		cifrado += chr(aux_xor)	# Se concatena 

	cifrado_binario = ''.join(bin(ord(x))[2:].zfill(8) for x in cifrado)	# Se pasa el cifrado obtenido a binario y se guarda como string

	print ('Mensaje cifrado en binario: ' + cifrado_binario)
	print ('Mensaje cifrado: ' + cifrado)
	
elif opcion == 'd':	#Descifrar
	cifrado = str(input("Introduzca el mensaje a descifrar: ")) 
	cifrado_binario = ''.join(bin(ord(x))[2:].zfill(8) for x in cifrado)	
	codigo = str(input("Introduzca la llave: "))
	mensaje = ''

	print ('Mensaje cifrado: ' + cifrado)
	print ('Mensaje cifrado en binario: ' + cifrado_binario)
	print ('Longitud del mensaje binario:', len(cifrado_binario))
	print ('Criptograma: ' + codigo)

	for i, c in enumerate(cifrado, start=0):	# Para cada caracter del cifrado
		aux_xor = xor(ord(c), ord(chr(int(codigo[i*8:(i+1)*8], base=2))))	# Aplicar XOR 
		mensaje += chr(aux_xor)	#Concatenación

	mensaje_binario = ''.join(bin(ord(x))[2:].zfill(8) for x in mensaje)	# Se pasa el mensaje obtenido a binario y se guarda como string
	print ('Mensaje original en binario: ' + mensaje_binario)
	print ('Mensaje original: ' + mensaje)

else:
	print ('Ha ocurrido un error inesperado. Terminando ejecución.')
	sys.exit(1)
