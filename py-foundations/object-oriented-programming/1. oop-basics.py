'''
OOP and Python
- a common programming paradigm
- comprised of objects (things) with properties and methods
- classes are used to create (instantiate) objects
'''

# --- Example: basic class ---
class MusicalInstrument:
    def __init__(self, name):
        self.name = name

    def play(self):
        return f"Playing {self.name}"

basic_instr = MusicalInstrument('Generic Instrument')
print(basic_instr.play())

# --- Example: basic inheritance ---
class StringInstrument(MusicalInstrument):
    # class attribute - shared by all instances
    is_tunable = True

    def __init__(self, name, number_of_strings):
        # call the parent constructor
        super().__init__(name)
        self.number_of_strings = number_of_strings

    #  override the parent method
    def play(self):
        return f"Playing {self.number_of_strings}-string {self.name}"
