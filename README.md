# 2024-2 OPEN SOURCE PROJECT
--------------------------------------------------------------------------------
# Mario’s Adventure Unleashed

![image](https://github.com/user-attachments/assets/662a9edb-95eb-45bf-bb39-47b065e8bf69)

## Descripton
The **"Mario’s Adventure Unleashed"** project is a Python-based platformer inspired by classic Mario games. This project features custom levels, interactive enemies, and a variety of power-ups, designed to challenge players in new and exciting ways. The game combines nostalgic elements with fresh mechanics, offering both veteran Mario fans and newcomers an engaging experience.

## Usage/Examples

```python
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
```

## Resources
- [super-mario-python](https://github.com/mx0c/super-mario-python/tree/master) 
- [meth-meth-method/super-mario](https://github.com/meth-meth-method/super-mario/)


## Support
For support, email anjs9912@gmail.com or join our Slack channel.


## Contributor
- [Professor Jamil Hussain](#)


## Authors

- Sejong Univ.[이정한](https://github.com/LeeJH0000)_(18011007)
- Sejong Univ.[안준수](https://github.com/wnstndks)_(19011680)
- Sejong Univ.[이시진](https://github.com/siloopin)_(22011161)

## License

[Apache License](http://www.apache.org/licenses/)

## Documentation Creation Using ReadTheDocs
- [ossw-project.readthedocs.io](https://ossw-project.readthedocs.io)