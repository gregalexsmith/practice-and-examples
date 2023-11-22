class MusicalInstrument:
    def __init__(self, name):
        self.name = name

    def play(self):
        return f"Playing {self.name}"

    # --- Example: Class Method ---
    @classmethod
    def from_dict(cls, instrument_dict):
        return cls(instrument_dict['name'])

    # --- Example: Static Method ---
    @staticmethod
    def is_valid_instrument(instrument_dict):
        if 'name' not in instrument_dict:
            return False
        name = instrument_dict['name']
        if len(name) > 30:
            return False
        return True


instr_dict = {'name': 'A cool instrument'}
instr = MusicalInstrument.from_dict(instr_dict)
print(instr.play())

not_instr_dict = {'name': 'Bass Guitar'}
if MusicalInstrument.is_valid_instrument(not_instr_dict):
    instr = MusicalInstrument.from_dict(not_instr_dict)
    print(instr.play())
else:
    print("Invalid instrument")

# --- Example: Abstract Classes & Methods ---
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side ** 2

    def perimeter(self):
        return self.side * 4

square = Square(5)
print(square.area())