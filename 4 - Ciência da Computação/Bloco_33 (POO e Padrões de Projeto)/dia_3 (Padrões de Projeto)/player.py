from abc import ABC, abstractmethod
# O problema é que inicialmente, o player não suportava MP4.
# P/ solucionar, um adaptador foi implementado (ADAPTER)


class MediaPlayer:
    def __init__(self, player):
        self.__player = player  # podemos dar play p/ rodar a música e/ou video

    def execute(self):
        self.__player.play()


class Target(ABC):
    @abstractmethod  # classe que receberá o adaptador
    def play(
        self,
    ):  # apenas atende necessidades, só pode ser herdada
        raise NotImplementedError


class AudioPlayer(Target):
    def play(self):  # utiliza recurso target p/ rodar o audio c/ target
        print("Play Audio")


class VideoAdapter(Target):
    def __init__(self, adaptee):
        self.__adaptee = adaptee

    def play(self):
        # Aqui seria a lógica que permitiria fazer a adaptação
        self.__adaptee.play_mp4()


class VideoPlayer:
    def play_mp4(self):
        print("Play MP4")


MediaPlayer(AudioPlayer()).execute()
MediaPlayer(VideoAdapter(VideoPlayer())).execute()
