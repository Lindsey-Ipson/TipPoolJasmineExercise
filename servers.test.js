describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it ('should create a table row element with server name and add it to the server table', function () {
    submitServerInfo();
    updateServerTable();
    let serverNameTd = document.querySelector('#serverTable tbody tr td');
    expect(serverNameTd.innerText).toEqual('Alice');
  });

  it('should ignore empty strings submitted for server names', function () {
    serverNameInput.value = '';
    updateServerTable();
    expect(allServers).toEqual({});
  })

  it('should handle short server names', function () {
    serverNameInput.value = 'Mo';
    submitServerInfo();
    let serverNameTd = document.querySelector('#serverTable tbody tr td');
    expect(serverNameTd.innerText).toEqual('Mo');
  })

  it('should handle long server names and names with spaces or combinations of first and last names', function () {
    serverNameInput.value = 'Augustine Amelia Johnson';
    submitServerInfo();
    let serverNameTd = document.querySelector('#serverTable tbody tr td');
    expect(serverNameTd.innerText).toEqual('Augustine Amelia Johnson');
  })

  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
