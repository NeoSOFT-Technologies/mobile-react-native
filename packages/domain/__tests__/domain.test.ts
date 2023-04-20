import { act, create } from 'react-test-renderer'
import { DomainModule, YourFirstUseCase, YourFirstUseCaseParams } from 'domain-layer'
import { Obsidian } from 'di'
import { FirstModel } from 'shared'

describe('YourFirstUseCase', () => {
 
  describe('Testing verify method', () => {
    it('should return true if emailOrPhone and password are provided', () => {
      const params = new YourFirstUseCaseParams({ emailOrPhone: 'mailto:test@example.com', password: 'password' })
      expect(params.verify()).toBe(true)
    })

    it('should return false if emailOrPhone is not provided', () => {
      const params = new YourFirstUseCaseParams({ emailOrPhone: '', password: 'password' })
      expect(params.verify()).toBe(false)
    })

    it('should return false if password is not provided', () => {
      const params = new YourFirstUseCaseParams({ emailOrPhone: 'mailto:test@example.com', password: '' })
      expect(params.verify()).toBe(false)
    })

    it('should return false if both emailOrPhone and password are not provided', () => {
      const params = new YourFirstUseCaseParams({ emailOrPhone: '', password: '' })
      expect(params.verify()).toBe(false)
    })
  })
})
