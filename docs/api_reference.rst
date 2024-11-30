API Reference
----

Player Class
============

The **Player** class manages the player's state in the game. This class handles the player's position, score, and other game-related attributes.

Methods:
============

- **move(direction: str)**
  - **Description**: Moves the player in the specified direction.
  - **Parameters**: 
    - `direction`: The direction to move (e.g., `"left"`, `"right"`, `"up"`, `"down"`)
  - **Return**: None
  - **Usage Example**:
    ```python
    pressedKeys = pygame.key.get_pressed()
    ```

- **jump()**
  - **Description**: Makes the player jump.
  - **Parameters**: None
  - **Return**: None
  - **Usage Example**:
    ```python
    pressedKeys[K_SPACE]
    ```

---

Enemy Class
===========

The **Enemy** class defines the behavior of enemy characters in the game. Each enemy has attributes such as position, health, and movement style.

Methods:
--------

- **move()**
  - **Description**: Automatically moves the enemy.
  - **Return**: None
  - **Usage Example**:
    ```python
    self.leftrightTrait = LeftRightWalkTrait(self, level)
    ```

