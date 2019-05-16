import { shallowMount } from '@vue/test-utils';
import EcosystemSection from '../EcosystemSection.vue';

describe('EcosystemSection.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'test message';
    const wrapper = shallowMount(EcosystemSection, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
