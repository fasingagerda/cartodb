const _ = require('underscore');
const OrganizationModel = require('dashboard/data/organization-model');
const UserModel = require('dashboard/data/user-model');
const UserGroupsCollection = require('dashboard/data/user-groups-collection');

const configModel = require('fixtures/dashboard/config-model.fixture');

module.exports = function () {
  const userPayload = {
    base_url: 'http://team.carto.com/u/pepe',
    id: 'uuid',
    organization: {
      id: 'o1',
      admins: []
    },
    groups: [{
      id: 'g1',
      display_name: 'my group'
    }]
  };
  const user = new UserModel(userPayload, { configModel });

  const organization = new OrganizationModel(
    userPayload.organization,
    {
      currentUserId: userPayload.id,
      configModel
    }
  );
  organization.owner = new UserModel();
  user.setOrganization(organization);

  const groups = new UserGroupsCollection(userPayload.groups, {
    organization: _.result(user.collection, 'organization') || user.organization,
    configModel
  });
  user.setGroups(groups);

  return user;
};
