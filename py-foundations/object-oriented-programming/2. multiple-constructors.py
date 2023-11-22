# --- Example: multiple constructors ---
from functools import singledispatchmethod

class TunningNote:
    @singledispatchmethod
    def __init__(self, note):
        raise TypeError("Invalid type for note")

    @__init__.register(str)
    def _from_str(self, note: str):
        self.note = note
    
    @__init__.register(int)
    @__init__.register(float)
    def _from_int(self, note: (int, float)):
        self.note = int(note)


tunning_note1 = TunningNote('A')
tunning_note2 = TunningNote(440)
tunning_note3 = TunningNote(440.0)
try:
    tunning_note4 = TunningNote({'note': 'A'})
except TypeError as e:
    print(e)
