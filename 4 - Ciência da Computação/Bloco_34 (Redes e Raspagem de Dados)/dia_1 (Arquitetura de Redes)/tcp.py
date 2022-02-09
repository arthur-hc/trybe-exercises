from socketserver import TCPServer, StreamRequestHandler


class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, cliente!")  # wfile permite a escrita, rfile ñ
        print(self.rfile.readline().strip().decode("UTF-8"))  # padrão de letra


if __name__ == "__main__":  # módulo p/ testes
    server_address = ("localhost", 8080)
    with TCPServer(
        server_address, TCPHandler
    ) as server:  # permite o TCPHandler fazer a comunicação com a outra ponta
        print("Server TCP ativo")
        server.serve_forever()  # mantém o servidor escutando

# Para ativar o servidor
# python3 tcp.py

# Para acessar o servidor
# Abrir o terminal
# $ telnet 127.0.0.1 8080
