.. code-block:: python
    
class Mario(EntityBase):
    def __init__(self, x, y, level, screen, dashboard, sound, gravity=0.8):
        super(Mario, self).__init__(x, y, gravity)
        self.sound = sound
        self.input = Input(self)
        self.inAir = False
        self.inJump = False
        self.powerUpState = 0
        self.invincibilityFrames = 0
        self.traits = {
            "jumpTrait": JumpTrait(self),
            "goTrait": GoTrait(smallAnimation, screen, self.camera, self),
            "bounceTrait": bounceTrait(self),
        }