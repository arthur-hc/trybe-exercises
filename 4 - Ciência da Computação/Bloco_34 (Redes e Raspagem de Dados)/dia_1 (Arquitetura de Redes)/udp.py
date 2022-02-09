from socketserver import UDPServer, DatagramRequestHandler


class TCPHandler(DatagramRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, cliente!")  # wfile permite a escrita, rfile ñ
        print(self.rfile.readline().strip().decode("UTF-8"))  # padrão de letra


if __name__ == "__main__":  # módulo p/ testes
    server_address = ("localhost", 9090)
    with UDPServer(
        server_address, TCPHandler
    ) as server:  # permite o TCPHandler fazer a comunicação com a outra ponta
        print("Server UDP ativo")
        server.serve_forever()  # mantém o servidor escutando

# Para ativar o servidor
# python3 udp.py

# Para acessar o servidor
# Abrir o terminal
# $ nc -u 127.0.0.1 9090
# Ao apertar enter, a mensagem será exibida
