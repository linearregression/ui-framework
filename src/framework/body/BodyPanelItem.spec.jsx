
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import BodyPanelItem from './BodyPanelItem.jsx';

describe('BodyPanelItem', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="test">test</div>,
        };
        const testCase = TestCaseFactory.create(BodyPanelItem, props);
        expect(testCase.first('#test').textContent).toBe('test');
      });
    });

    describe('rhythm', () => {
      describe('LARGE', () => {
        it('adds the appropriate class', () => {
          const props = {
            rhythm: BodyPanelItem.RHYTHM.LARGE,
          };

          const testCase = TestCaseFactory.create(BodyPanelItem, props);
          expect(testCase.dom.className)
            .toContain('bodyPanelItem--largeRhythm');
        });
      });
    });
  });
});
