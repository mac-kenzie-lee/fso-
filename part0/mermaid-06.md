
```mermaid
sequenceDiagram
    participant browser
    participant server


browser->>server:  https://studies.cs.helsinki.fi/exampleapp/data.json  server
    activate server
    server-->>browser:payload with json is returned and rendered on screen
    deactivate server


```