# 7. Bridge

Bridge 패턴 : 기능 계층과 구현 계층의 분니로 시스템의 확장성과 유지보수성을 높이는 패턴

- 기능 계층 : 상속받은 클래스에서 완전히 새로운 매서드(기능)을 추가하는 것
- 구현 계층 : 추상 클래스 상속 또는 인터페이스 구현을 통해 이미 선언된 매서드를 구현하는 것

## 정리

- Bridge 패턴은 기능 계층과 구현 계층을 분리합니다.
- 새로운 기능을 추가할 때는 기능 계층을 통해서 확장하고, 새로은 구현을 추가할 때는 구현 계층을 통해서 확장함으로써 복잡도를 효과적으로 낮출 수 있습니다.
- 기능 계층과 구현 계층은 서로 위임을 통해서 통신합니다.
- 클래스들간의 관계는 단순하게 만들어 주는 것이 좋은데 Bridge 패턴은 기능 계층과 구현 계층을 분리함으로써 클래스들 간의 관계를 단순하게 유지시켜 줍니다.